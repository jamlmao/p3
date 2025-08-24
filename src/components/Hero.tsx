import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {heroData} from '../data/data'
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    return (
     <section className="px-[5%] py-16 md:py-24 bg-background border border-red">

        <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row mx-auto w-full max-w-screen-lg">

            <div className="flex flex-col gap-7 lg:w-2/3">

                <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-7xl">
                   <span className="text-blue-800">{heroData.heading}</span> 
                   <span className="text-gray-800">{heroData.subheading}</span>
                </h2>

                <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
                    {heroData.description}
                </p>

                <div className="flex flex-wrap items-start gap-5 lg:gap-7">

                    <Button asChild className="bg-blue-800 hover:bg-blue-700 uppercase">
                        <Link
                            href={heroData.buttons?.primary?.url}
                            className="flex items-center group"
                        >
                            <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                                {heroData.buttons.primary?.text}
                            </span>
                            <ChevronRight className="size-4 lg:size-5 hidden group-hover:inline" />
                        </Link>
                    </Button>

                    <Button asChild variant="link" className="underline uppercase hover:no-underline">
                        <Link
                            href={heroData.buttons?.secondary?.url}
                            className="flex items-center px-4 py-2 rounded-md transition-all duration-200 hover:bg-gray-700 hover:text-white group"
                        >
                            {heroData.buttons.secondary?.text}
                            <ChevronRight className="size-4 lg:size-5 hidden group-hover:inline ml-2" />
                        </Link>
                    </Button>

                </div>

            </div>

            <div className="relative z-10">
               <div className="absolute inset-0 z-0 rounded-[35px] overflow-hidden">
                    <Image
                        fill
                        src={heroData.image.src}
                        alt={heroData.image.alt}
                        className="object-cover w-full h-full"
                        style={{ borderRadius: 45 }}
                    />
                </div>
                <Image
                    src="/images/tabletframe.png"
                    width={500}
                    height={320}
                    alt="tablet frame"
                    className="relative z-10 pointer-events-none select-none"
                    draggable={false}
                />
            </div>
            



        </div>

     </section>
    )
}


export default HeroSection