'use client'

import Image from 'next/image'; // Import the Image component
import aastu from '../../assets/aastu.png';
import allan from '../../assets/allan.png';
import jasiri from '../../assets/jasiri.png'; 
import microsoft from '../../assets/microsoft.png'; 

const logos = [
  { name: 'Vercel', url: aastu },
  { name: 'Nextjs', url: allan },
  { name: 'Prime', url: jasiri },
  { name: 'Trustpilot', url: microsoft },
]

const Brand = () => {
  return (
    <div className="w-full py-8 overflow-hidden bg-white mt-8">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-4 font-sans text-2xl font-bold leading-none tracking-tight text-blue-500 sm:text-4xl md:mx-auto">
            Our Partners
          </h2>
        </div>
        <div className="relative">
          <div className="flex gap-12 py-2 justify-center items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <Image
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className={`h-36 w-auto object-contain hover:opacity-50 transition-all duration-300`}
                  width={260} // Set an appropriate width
                  height={148} // Set an appropriate height
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand;