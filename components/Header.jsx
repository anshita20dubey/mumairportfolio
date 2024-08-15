import Link from 'next/link'
import React from 'react'



const Header = () => {
    return (
        <div className='w-3/4 ml-44'>
            <nav className='w-full h-32 flex items-center justify-between'>
                <div className='w-48 h-20 object-cover object-center'>
                    <img className='w-full h-full' src="../logo.png" alt="" />
                </div>
                <div className='space-x-7 text-white font-sans'>
                    <Link href="/" className="hover:text-orange-500 font-sans transition-colors duration-200">Home</Link>
                    <Link href="/about" className="hover:text-orange-500 font-sans transition-colors duration-200">About Me</Link>
                    <Link href="/services" className="hover:text-orange-500 font-sans transition-colors duration-200">Services</Link>
                    <Link href="/projects" className="hover:text-orange-500 font-sans transition-colors duration-200">Projects</Link>
                    <Link href="/testimonials" className="hover:text-orange-500 font-sans transition-colors duration-200">Testimonials</Link>
                    <Link href="/contact" className="hover:text-orange-500 font-sans transition-colors duration-200">Contact</Link>
                    <button className='bg-orange-500 px-5 py-2 rounded hover:bg-white hover:text-orange-500 hover:font-semibold  transition-colors duration-300'>Download CV</button>
                </div>
            </nav>
        </div>
    )
}

export default Header