import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: 'Mumair Portfolio',
  icons: {
    icon: '/favicon.png', 
    apple: '/favicon.png', 
  },
}

const page = () => {
  return (
    <div className='flex items-center justify-center h-4/5'>
      <div className='w-3/4 h-4/5 flex '>
        {/* Left Text Section */}
        <div className="w-2/4 h-full text-white space-y-4">
          <br />
          <h3 className="text-lg font-semibold tracking-wider">Hi I am</h3>
          <h1 className="text-4xl font-bold text-orange-500">Muhammad Umair</h1>
          <h2 className="text-7xl font-extrabold">UI & UX <br /> <span className='ml-40 bg-transparent'>Designer</span></h2>
          <p className="max-w-md font-normal tracking-wide font-sans">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <button className="px-7 py-1 mt-4 text-lg font-medium bg-orange-500 rounded-md hover:bg-white hover:text-orange-500 hover:font-semibold  transition-colors duration-300">
            Hire Me
          </button>
        </div>
        {/* Right Image Section */}
        <div className="relative w-2/4 h-full flex items-center justify-center">
          <div className="overflow-hidden ml-16 bg-white w-96 h-96 rounded-full border-2 border-orange-200">
            <img
              src="/avatar.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-0 w-72 h-16 mt-20 ml-16 bg-orange-500 opacity-50"></div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex absolute text-white space-x-7 right-96 bottom-16">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f text-2xl hover:text-orange-400 transition-colors duration-200"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter text-2xl hover:text-orange-400 transition-colors duration-200"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram text-2xl hover:text-orange-400 transition-colors duration-200"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in text-2xl hover:text-orange-400 transition-colors duration-200"></i>
        </a>
      </div>
    </div>
  );
}

export default page