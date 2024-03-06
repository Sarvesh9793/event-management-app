import { Carousel } from '@material-tailwind/react';
import {Typography,Button} from '@material-tailwind/react';
import React from 'react';
import { Form } from 'react-router-dom';

const about = () => {
  return (
    <>
    <Carousel>
    <div className="relative ">
        {/* <img src={Img1} alt="image 1" className=" object-cover"/> */}
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
         alt="image 1" 
         className="h-full w-full object-cover"
         />
     
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             Event Management System
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
    
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan massa id augue condimentum, nec fermentum leo eleifend. Ut ut efficitur velit. Phasellus porta erat eget lectus malesuada vehicula.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="https://via.placeholder.com/500" alt="About Us" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default about;
