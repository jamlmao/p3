

import React from "react";
import {servicesData} from "../data/data"


const Services = () => {
    return(
      <section className="px-[5%] py-16 md:py-24">
        <div className=" flex items-center justify-center">
            <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
                    Run Your Negosyo Without The Hassle
                </h2>
                <div className="mt-10 sm:mt-16 grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 items-center max-w-screen-lg mx-auto px-6">
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col border rounded-xl py-6 px-5"
                        >
                            <div className="mb-3 h-10 w-10 flex items-center bg-blue-800 justify-center rounded-full ">
                                <service.icon className="h-6 w-6 text-muted" />
                            </div>
                            <span className="text-lg font-semibold">{service.title}</span>
                            <p className="mt-1 text-foreground/80 text-[15px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    )
}


export default Services;