import React from 'react';

export const metadata = {
    title: 'Mumair Portfolio',
    icons: {
      icon: '/favicon.png', 
      apple: '/favicon.png', 
    },
  }

const projects = [
    {
        id: 1,
        title: 'AirCalling Landing Page Design',
        image: '/aircalling.jpg',
        category: 'Web Design',
    },
    {
        id: 2,
        title: 'Business Landing Page Design',
        image: '/business.jpg',
        category: 'Web Design',
    },
    {
        id: 3,
        title: 'Ecom Web Page Design',
        image: '/ecom.jpg',
        category: 'Web Design',
    },
];

const ProjectsSection = () => {
    return (
        <section className="text-white">
            <div className="max-w-7xl mx-auto px-3 -mt-1 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold">My Projects</h2>
                    <p className="mt-4 text-white font-sans">
                        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br></br> lectus.
                        Phasellus consequat urna tellus.
                    </p>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="px-4 py-2 rounded font-semibold font-sans bg-white text-black hover:text-white hover:bg-orange-500 hover:font-semibold transition-colors duration-300">All</button>
                    <button className="px-4 py-2 rounded font-semibold font-sans bg-white text-black hover:text-white hover:bg-orange-500 hover:font-semibold transition-colors duration-300">UI/UX</button>
                    <button className="px-4 py-2 rounded bg-orange-500 text-white font-semibold font-sans hover:bg-white hover:text-orange-500 hover:font-semibold transition-colors duration-300">Web Design</button>
                    <button className="px-4 py-2 rounded font-semibold font-sans bg-white text-black hover:text-white hover:bg-orange-500 hover:font-semibold transition-colors duration-300">App Design</button>
                    <button className="px-4 py-2 rounded font-semibold font-sans bg-white text-black hover:text-white hover:bg-orange-500 hover:font-semibold transition-colors duration-300">Graphic Design</button>
                </div>
                <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ">
                    {projects.map((project) => (
                        <div key={project.id} className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-lg" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-orange-500">{project.category}</h3>
                                <p className="mt-2 text-white font-bold">{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
