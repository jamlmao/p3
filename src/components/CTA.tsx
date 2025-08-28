import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { section } from "motion/react-client";

const CallToAction = () => {
  return (
    <section>
        <div className="w-full py-8 bg-blue-800 sm:py-12 md:py-16 ">
            <div className="container border shadow-lg dark:shadow-foreground/10 mx-auto p-12 rounded-md bg-white sm:px-16 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:max-w-md mb-12 md:mb-0 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Discover Seamless POS Solutions
                    </h2>

                    <p className="text-neutral-500 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                        Empower your business with trusted POS solutions tailored to meet
                        the needs of small, medium, and large enterprises. Backed by
                        24/7 support, our services ensure smooth operations and hassle-free
                        management.
                    </p>
                    <Button size="lg" className="bg-blue-800 hover:bg-blue-700 w-full sm:w-auto">
                        Get Started <ArrowUpRight className="!h-5 !w-5 ml-1" />
                    </Button>
                </div>

                {/* Right content - Image container with group hover for both images */}
                <div className="group relative w-full md:w-1/2 h-60 sm:h-72 md:h-80 mt-4 md:mt-0">
                    {/* Background tilted image */}
                    <div className="absolute right-4 bottom-0 w-3/4 h-full bg-white rounded-t-lg shadow-lg transform rotate-6 overflow-hidden cursor-pointer transition-all duration-500 group-hover:rotate-3">
                        {/* First image (default visible) */}
                        <div className="w-full h-full transition-opacity duration-500 group-hover:opacity-0">
                            <Image 
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="People using POS system"
                                fill
                                sizes="(max-width: 768px) 75vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        
                        {/* Second image (appears on hover) */}
                        <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <Image 
                                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="POS system closeup"
                                fill
                                sizes="(max-width: 768px) 75vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                
                    {/* Foreground image */}
                    <div className="absolute right-0 bottom-0 w-3/4 h-full bg-white rounded-t-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-500 group-hover:translate-y-2">
                        {/* First image (default visible) */}
                        <div className="w-full h-full transition-opacity duration-500 group-hover:opacity-0">
                            <Image 
                                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="POS system closeup"
                                fill
                                sizes="(max-width: 768px) 75vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        
                        {/* Second image (appears on hover) */}
                        <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <Image 
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="People using POS system"
                                fill
                                sizes="(max-width: 768px) 75vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default CallToAction;