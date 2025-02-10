"use client";
import React from "react";
import Image from "next/image";
import temp from "../../assets/secccc.svg"; // Ensure the image is placed in the public folder

const Features3 = () => {
  return (
    <div className="py-16 -mt-4">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-[#f6f9ff] lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        
          <div className="mx-8 md:w-7/12 lg:w-1/2">
        
            <h2 className="text-3xl font-bold text-blue-500  md:text-4xl">
            For Universities and Researchers
            </h2>

            <ul className="space-y-4 mt-8">
              <li className="flex items-center space-x-4 cursor-pointer">
                <span className="text-3xl text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32"><path fill="currentColor" d="M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5m-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2"></path></svg>                  </span>
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-blue-500">Enhance Collaboration</p>
                  <p className="text-md text-gray-600">Access past research easily and collaborate with peers.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
              <span className="text-3xl text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M12 4.57a.5.5 0 0 0-.024-.235l-.013-.063a1.5 1.5 0 0 0-.18-.434c-.092-.15-.222-.28-.482-.54L8.711.707c-.259-.26-.389-.39-.54-.483a1.5 1.5 0 0 0-.496-.193a.5.5 0 0 0-.235-.024C7.329.004 7.194.004 7.015.004h-2.21c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31C.008 2.283.008 3.12.008 4.8v6.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h2.423c.401 0 .602-.523.347-.832a.45.45 0 0 0-.345-.168H4.8c-.857 0-1.44-.001-1.89-.038c-.438-.036-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819c-.036-.45-.037-1.03-.037-1.89v-6.4c0-.857 0-1.44.037-1.89c.036-.438.101-.663.18-.819c.192-.376.498-.682.874-.874c.156-.08.381-.145.82-.18C3.36.997 3.94.997 4.8.997H7v3.5a.5.5 0 0 0 .5.5H11v.547c0 .25.207.45.456.473c.285.025.543-.188.543-.474V4.99c0-.178 0-.313-.005-.425zM8 1.41L10.59 4H8z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M11 15c.834 0 1.61-.255 2.25-.691l1.47 1.47a.749.749 0 1 0 1.06-1.06l-1.47-1.47c.436-.641.691-1.41.691-2.25c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-1c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3" clipRule="evenodd"></path></svg>                </span>
              <div className="flex flex-col">
                  <span className="text-lg font-bold text-blue-500">Efficient Literature Review</span>
                  <span className="text-md text-gray-600">Use AI tools to quickly identify relevant studies.</span>
                </div>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <span className="text-3xl text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z"></path></svg>                  </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-blue-500">Secure and Interoperable</span>
                  <span className="text-md text-gray-600">Ensuring long-term retention with compatibility across systems.</span>
                </div>
              </li>
            </ul>


            <p className="my-8 text-gray-600">
            </p>
           
          </div>


          <div className="md:w-4/12 lg:w-1/3">
            <Image
              src={temp}
              alt="Fast, Secure and Easy Access"
              loading="lazy"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features3;
