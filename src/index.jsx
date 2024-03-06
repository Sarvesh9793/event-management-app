import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';

// export Switch from 'react-router-dom';
import Organizer_reg from './MyComponents/Organizer_Reg_Login/Organizer_reg.jsx';
import Organizer_login from './MyComponents/Organizer_Reg_Login/Organizer_login.jsx';
import User_reg from './MyComponents/User_Reg_Login/User_reg.jsx';
import Home from './MyComponents/Home/homee.jsx';
import Navbar  from './MyComponents/Navbar/navbar.jsx';
import User_login from './MyComponents/User_Reg_Login/User_login.jsx';
import Cards from './MyComponents/Home/Cards.jsx';
import Footer from './MyComponents/Footer/footer.jsx';
import About from './MyComponents/About/about.jsx';
import Contact from './MyComponents/Contact/contact.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='cards' element={<Cards />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='Organizer_login' element = {<Organizer_login/>} />
      <Route path='User_login' element = {<User_login/>} />
      <Route path='Organizer_reg' element = {<Organizer_reg/>} />
      <Route path='User_reg' element = {<User_reg/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
