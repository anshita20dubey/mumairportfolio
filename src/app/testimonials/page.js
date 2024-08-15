"use client";

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image: "/people4.jpg",
    testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "/people3.jpg",
    testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 3,
    name: "Bob Sane",
    role: "SSD",
    image: "/people2.jpg",
    testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    id: 3,
    name: "Eren Marley",
    role: "HR",
    image: "/people1.jpg",
    testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },

];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="text-white py-12">
      <h2 className="text-5xl font-bold tracking-wider text-center mb-4">Testimonials</h2>
      <p className="text-center font-sans mb-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br></br> netus in. Aliquet donec morbi convallis pretium.</p>
      <div className="relative flex justify-center items-center h-80">
        <div className="absolute left-0 p-4 cursor-pointer" onClick={prevSlide}>
          ❮
        </div>

        <div className="w-full max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-none w-full p-6 bg-white text-black rounded-lg shadow-lg ">
                <div className="flex items-center bg-white">
                  <img src={testimonial.image} alt={testimonial.name} className="w-40 h-40 rounded-full mr-6 object-cover"/>
                  <div>
                    <p className="text-lg font-sans bg-white  ">{testimonial.testimonial}</p>
                    <p className="font-bold text-xl bg-white ">{testimonial.name}</p>
                    <p className='bg-white font-sans'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 p-4 cursor-pointer" onClick={nextSlide}>
          ❯
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 cursor-pointer mx-1 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-white"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
