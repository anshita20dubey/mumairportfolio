import React from 'react';
import Link from 'next/link';


export default function ContactSection() {
  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-semibold tracking-wider mb-4">Let's Design Together</h2>
        <p className="text-lg font-sans mb-12">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br></br> netus in.
          Aliquet donec morbi convallis pretium.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 px-6 w-[450px] font-medium rounded-lg border-none font-sans bg-white focus:outline-none text-black"
          />
          <button className="bg-orange-500 font-medium font-sans hover:bg-white hover:text-orange-500 hover:font-semibold  transition-colors duration-300 text-white ml-3 px-6 py-3 rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>
        <ul className="flex justify-center space-x-6 mb-8">
          <li><Link href="/" className="hover:text-orange-500 font-sans transition-colors duration-200">Home</Link></li>
          <li><Link href="/about" className="hover:text-orange-500 font-sans transition-colors duration-200">About Me</Link></li>
          <li><Link href="/services" className="hover:text-orange-500 font-sans transition-colors duration-200">Services</Link></li>
          <li><Link href="/projects" className="hover:text-orange-500 font-sans transition-colors duration-200">Projects</Link></li>
          <li><Link href="/testimonials" className="hover:text-orange-500 font-sans transition-colors duration-200">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-orange-500 font-sans transition-colors duration-200">Contact</Link></li>
        </ul>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-orange-500 text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-orange-500"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-16 flex items-center justify-center font-sans bg-black text-white">
        © 2023 <span className="text-orange-500 font-bold bg-black ml-1">Mumair </span> &nbsp; All Rights Reserved, Inc.
      </div>
    </div>
  );
}
