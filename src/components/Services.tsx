

import React from "react";
import {servicesData} from "../data/data"
import { Card, CardContent, CardHeader } from "./ui/card";

const Services = () => {
    return(
      <section id="#services" className="px-[5%] py-16 md:py-24">
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-screen-lg w-full py-10 px-6">
                <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
                    Run your business without hassle using our trusted <span className="text-blue-800">POS</span> solutions
                </h2>
                <div className="mt-16 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {servicesData.map((feature) => (
                        <Card
                            key={feature.title}
                            className="group flex flex-col border rounded-xl overflow-hidden shadow-none hover:bg-blue-800  transition-colors duration-300"
                        >
                            <CardHeader>
                                <feature.icon className="h-6 w-6 text-blue-800 group-hover:text-zinc-200" />

                                <h4 className="!mt-3 text-xl font-semibold tracking-tight text-blue-800 group-hover:text-zinc-200">
                                    {feature.title}
                                </h4>

                                <p className="mt-1 text-muted-foreground text-[17px] group-hover:text-zinc-300">
                                    {feature.description}
                                </p>
                            </CardHeader>
                            <CardContent className="mt-auto px-0 pb-0">
                                 {/* Image Placeholders */}
                                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            </div>
      </section>
    )
}


export default Services;