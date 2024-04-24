import React from "react";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Booking = () => {
  const bookingDetails = {
    eventName: "Event Name",
    date: "Event Date",
    venue: "Event Venue"
    // Add more details as needed
  };
   const [bookings, setBookings] = useState([]);
const { user } = useSelector((state) => state.profile);

console.log(user);

  useEffect(() => {
    // Fetch bookings data from the server
    axios
      .post('http://localhost:3001/booking_venueorg',user)
      .then((response) => {
        if (response.data) {
          setBookings(response.data);
        } else {
          console.error("Error fetching bookings: Response data is undefined");
        }
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);
  return (
    <div className="container mx-10 flex justify-center flex-col items-center mb-[20rem]">
      <h1 className="text-2xl font-semibold my-4">Your Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table-auto  bg-gray-800 w-[55rem]">
          <thead>
            <tr className="bg-gray-800 text-white rounded-md">
              <th className="px-4 py-2">Booking Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Slot</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="px-4 py-2">{booking.booking_username}</td>
                <td className="px-4 py-2">{booking.booking_phone}</td>
                <td className="px-4 py-2">{booking.booking_email}</td>
                <td className="px-4 py-2">{booking.booking_date}</td>
                <td className="px-4 py-2">{booking.preferred_slot}</td>
                {/* <td className="px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full"
                    onClick={() => handleCancelBooking(booking.booking_id)}
                  >
                    Cancel
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
