import React from 'react';
import Image from 'next/image';
import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.jpeg'
import testimonial3 from '../../assets/testimonial3.jpeg'

const Testimonial = () => {
    return (
        <section id="testimonials" className="p-28 bg-[#F9FAFB]">
            <div className="container px-4">


                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
               
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-500  sm:text-4xl md:mx-auto">
          Testimonials
        </h2>
                    <p className="text-base text-dark text-md">
                        Our platform has transformed the way we collaborate and share ideas. The intuitive design allows us to focus on what truly matters.
                    </p>
                </div>



                <div className="flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                        <div className="p-8 mb-12 transition duration-300 transform shadow-xl ud-single-testimonial wow fadeInUp bg-teal-light shadow-testimonial rounded-xl lg:hover:-translate-y-4" data-wow-delay=".1s
              ">
                            <div className="flex items-center mb-3 ud-testimonial-ratings">
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                            </div>
                            <div className="mb-6 ud-testimonial-content">
                                <p className="text-base tracking-wide  text-body-color">
                                    “I've seen a significant increase in productivity since implementing this platform. The intuitive interface and seamless collaboration features have been a game-changer for our team.”
                                </p>
                            </div>
                            <div className="flex items-center ud-testimonial-info">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                <Image
            src={testimonial1}
            alt="testimonial1"
            loading="lazy"
            className="rounded-3xl"
          />                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">Dr. Kemal Ibrahim (Phd)</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                        <div className="p-8 mb-12 transition duration-300 transform shadow-xl ud-single-testimonial wow fadeInUp bg-teal-light shadow-testimonial rounded-xl lg:hover:-translate-y-4" data-wow-delay=".1s
              ">
                            <div className="flex items-center mb-3 ud-testimonial-ratings">
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                            </div>
                            <div className="mb-6 ud-testimonial-content">
                                <p className="text-base tracking-wide text-body-color">
                                    “The platform's automation features have streamlined our workflow, allowing us to focus on high-priority tasks and increase overall efficiency.”
                                </p>
                            </div>
                            <div className="flex items-center ud-testimonial-info">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                <Image
            src={testimonial2}
            alt="testimonial2"
            loading="lazy"
            className="rounded-3xl"
          />
                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">Ass. Prof. Dinku Seyoum (Phd)</h4>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                        <div className="p-8 mb-12 transition duration-300 transform shadow-xl ud-single-testimonial wow fadeInUp bg-teal-light shadow-testimonial rounded-xl lg:hover:-translate-y-4" data-wow-delay=".1s
              ">
                            <div className="flex items-center mb-3 ud-testimonial-ratings">
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                                <span className="mr-1 text-blue-500">
                            <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                                <path
                                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                            </svg>
                        </span>
                            </div>
                            <div className="mb-6 ud-testimonial-content">
                                <p className="text-base tracking-wide text-body-color">
                                    “The platform's analytics and reporting features have given us valuable insights into our workflow, allowing us to make data-driven decisions and optimize our processes.”
                                </p>
                            </div>
                            <div className="flex items-center ud-testimonial-info">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial3}
                                        alt="testimonial3"
                                        loading="lazy"
                                        className="rounded-3xl"
                                    />
                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">Dr Milkias Berhanu (Phd)</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Testimonial; // Export the component