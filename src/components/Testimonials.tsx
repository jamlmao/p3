import { Testimonials } from "@/data/data";
import { Marquee } from "./ui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import Link from "next/link";
import React, { ComponentProps } from "react";



const TestimonialsSection = () => {
    return (

        <div id="testimonials" className="flex justify-center items-center py-20">
            <div className="h-full w-full">
                <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6 text-blue-800">
                    What Our Clients Say
                </h2>
                <div className="relative">
                    <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
                    <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
                    <Marquee pauseOnHover className="[--duration:20s]">
                        <TestimonialList />
                    </Marquee>
                    <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
                        <TestimonialList />
                    </Marquee>
                </div>
            </div>
        </div>
    )
}



const TestimonialList = () =>
  Testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-xl font-medium text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <FacebookLogo className="h-5 w-auto text-blue-800" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));



  const FacebookLogo = (props: ComponentProps<"svg">) => (
   <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Facebook</title>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
    </svg>
  );

export default TestimonialsSection