export const metadata = {
  title: 'Mumair Portfolio',
  icons: {
    icon: '/favicon.png', 
    apple: '/favicon.png', 
  },
}

export default function About() {
  return (
    <div className="flex items-center justify-center mt-24 text-white">
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-96 h-96 rounded-full overflow-hidden">
            <img 
              src="/avatar.jpg" // Update this to the path of your image
              alt="About Me"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="absolute top-72 w-80 h-16  bg-orange-500 opacity-50"></div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4">About Me</h1>
          <p className="mb-6 font-medium font-sans">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className=" font-sans">UX</span>
              <div className="w-3/4 h-2 bg-gray-600 ml-4 relative">
                <div className="absolute left-0 top-0 h-full bg-orange-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className=" font-sans">Website Design</span>
              <div className="w-3/4 h-2 bg-gray-600 ml-4 relative">
                <div className="absolute left-0 top-0 h-full bg-orange-500" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className=" font-sans">App Design</span>
              <div className="w-3/4 h-2 bg-gray-600 ml-4 relative">
                <div className="absolute left-0 top-0 h-full bg-orange-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className=" font-sans">Graphic Design</span>
              <div className="w-3/4 h-2 bg-gray-600 ml-4 relative">
                <div className="absolute left-0 top-0 h-full bg-orange-500" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
