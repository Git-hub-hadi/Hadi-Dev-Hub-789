import React from 'react';
import logoImage from '/IDEO FULL STACK DEV COURSE/FRONT-END/react js assingments/React-Our-Portfolio/src/assets/p-logo.jpeg';

const Header = () => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm ">
        <div className="container-custom flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
          <img className='size-12 rounded' src={logoImage} alt="Logo"/>

            {/* <img src="\React-Our-Portfolio\public/p-logo.jpeg" alt="logo" /> */}
            {/* <span className="text-primary-600 text-xl font-bold">AHS.</span> */}
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('Services')} 
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('Skills')} 
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button className="text-dark-800 hover:text-primary-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
    
  }
  
  
  export default Header