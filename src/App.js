import logo from './logo.svg';
import './App.css';
import './Styles/Pages.css';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'; // Import other pages as needed
import Services from './Pages/Services'; // Import other pages as needed

function App() {
  const [currentPage, setCurrentPage] = useState();

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Services":
        return <Services />;
      default:
        return <Home />; // Default to Home or any other default page
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
