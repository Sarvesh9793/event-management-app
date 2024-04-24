import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Card';

const Venue_search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:3001/venue_search');
        setVenues(response.data);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };

    fetchVenues();
  }, []);

  useEffect(() => {
    const cities = venues.map((venue) => venue.VenueCity);
    const uniqueCities = Array.from(new Set(cities));
    setCitySuggestions(uniqueCities);
  }, [venues]);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTermLower = searchTerm.toLowerCase().trim();
  
    if (searchTermLower === '') {
      setFilteredVenues([]);
    } else {
      const filtered = venues.filter((venue) =>
        venue.VenueCity.toLowerCase().includes(searchTermLower)
      );
      setFilteredVenues(filtered);
    }
  };

  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    const filtered = venues.filter((venue) =>
      venue.VenueCity.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredVenues(filtered);
    setShowSuggestions(false);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

    return (
      <div className='mb-[30rem]'>
      <div className="container mx-auto p-6 ">
        <h1 className="text-2xl font-bold flex justify-center ">Venue Search</h1>
        <form onSubmit={handleSearch} className="mb-4 flex w-[26rem] align-middle items-baseline gap-2 justify-center mx-auto">
          <div className="">
            <input
              type="text"
              placeholder="Search City"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={toggleSuggestions}
              className=" relative border flex justify-center border-gray-300 rounded-md px-4 py-2 mx-auto focus:outline-none focus:border-blue-500"
            />
            {showSuggestions && citySuggestions.length > 0 && (
              <div className=" absolute z-10 bg-white mt-1 p-1 w-[13rem] rounded-md shadow-md">
                {citySuggestions.map((city) => (
                  <div
                    key={city}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2  flex justify-center mx-auto mt-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        
        <div className="w-fit h-[26rem] gap-3 flex  mx-auto">
          {filteredVenues.map((venue) => (
            <div key={venue.venue_id} className="bg-white rounded-lg shadow-md p-4">
              <Card venue={venue}/>
            </div>
          ))}
        </div>
        </div>
    
      </div>
    );
};

export default Venue_search;
