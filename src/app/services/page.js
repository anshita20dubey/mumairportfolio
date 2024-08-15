import { FaDesktop, FaMobileAlt, FaPencilRuler, FaPalette } from 'react-icons/fa';

export const metadata = {
  title: 'Mumair Portfolio',
  icons: {
    icon: '/favicon.png', 
    apple: '/favicon.png', 
  },
}

export default function Services() {
  return (
    <div className="text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-5">Services</h2>
        <p className="mb-12 text-center font-medium font-sans">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br></br> netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id='bgwhite' className="bg-white text-left cursor-pointer text-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaDesktop className="text-orange-500 text-5xl bg-white mb-4" />
            <h3 className="text-3xl bg-white font-bold mb-2">UI/UX</h3>
            <p className='bg-white font-medium font-sans'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="bg-white text-black text-left p-6 rounded-lg cursor-pointer shadow-lg transform transition duration-300 hover:scale-105">
            <FaPencilRuler className="text-orange-500 bg-white text-5xl mb-4" />
            <h3 className="text-3xl bg-white font-bold mb-2">Web Design</h3>
            <p className='bg-white font-medium font-sans'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="bg-white text-black p-6 text-left cursor-pointer rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaMobileAlt className="text-orange-500 bg-white text-5xl mb-4" />
            <h3 className="text-3xl bg-white font-bold mb-2">App Design</h3>
            <p className='bg-white font-medium font-sans'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="bg-white text-black text-left cursor-pointer p-5 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaPalette className="text-orange-500 bg-white text-5xl mb-4" />
            <h3 className="text-3xl font-bold bg-white mb-2">Graphic Design</h3>
            <p className='bg-white font-medium font-sans'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
