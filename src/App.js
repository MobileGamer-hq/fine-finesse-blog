import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import logo from './logo.svg';
import './Styles/Pages.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Post from './Pages/Post'; // Make sure to import the Post component
import LogIn from './Pages/LogIn';
import UploadPost from './Pages/UploadPost';
import { sizes } from './constants';



function App() {
  return (
    <div className="App">
      <div className='nav-button' onClick={() => console.log("Nav Clicked") }>
        <HiMenuAlt2 />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post/:id" element={<Post />} /> {/* Updated route */}
        {/* Add more routes as needed */}


        <Route path='login' element={<LogIn />} />
        <Route path='upload' element={<UploadPost />} />
      </Routes>
    </div>
  );
}

export default App;