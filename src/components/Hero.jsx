import React from 'react';
import ourImage from '/IDEO FULL STACK DEV COURSE/FRONT-END/react js assingments/React-Our-Portfolio/src/assets/our-image.jpeg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:py-40 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-4">
              Hi, I'm <span className="text-primary-600">Abdul Hadi</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-600 mb-8">
              A passionate web developer crafting beautiful, functional websites and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-outline"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={ourImage}
                alt="Abdul Hadi Siddiqui"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero