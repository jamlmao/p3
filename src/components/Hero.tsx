
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import {heroData} from '../data/data'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";




const HeroSection = () => {
    return (
       <section className="px-8 py-8 md:py-16">
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                    <div className="my-auto">
                        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight ">
                           <span className="font-bold text-blue-800">{heroData.heading}</span> {heroData.subheading}
                        </h1>
                        <p className="mt-6 max-w-[60ch] text-lg">
                           {heroData.description}
                        </p>
                        <div className="mt-12 flex flex-col lg:flex-row items-center gap-4">

                            <Button size="lg" className="rounded-full text-base  bg-blue-800 hover:bg-blue-700">
                               {heroData.buttons.primary.text}<ArrowUpRight className="!h-5 !w-5" />
                            </Button>
                            <Modal>
                                <ModalTrigger className="bg-white dark:bg-dark dark:text-white text-blue-800 flex justify-center group/modal-btn border border-blue-800 dark:border-white rounded-full">
                                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 ">
                                       Watch Demo
                                    </span>
                                       
                                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-blue-800 z-20 dark:text-white">
                                        <CirclePlay className="!h-5 !w-5" />
                                    </div>
                                </ModalTrigger>
                                <ModalBody>
                                   <ModalContent className="items-center">
                                      <iframe 
                                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F786223680606415%2F&show_text=false&width=267&t=0&autoplay=1" 
                                        width="267" 
                                        height="476" 
                                        scrolling="no" 
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        className="rounded-lg" 
                                    >
                                    </iframe>
                                    </ModalContent>
                                </ModalBody>
                              

                            </Modal>
                          
                        </div>
                    </div>
                    <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-10rem)] bg-accent rounded-xl" >
                        <div
                            className="absolute inset-0 bg-blue-500/40 rounded-xl z-10 lg:block hidden"
                            // style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0% 100%, 0 100%)",}}
                        />
                        <Image
                            src={heroData.image.src}
                            alt={heroData.image.alt}
                            sizes="(max-width: 1000px) 100vw, 1000px"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
        );
}


export default HeroSection