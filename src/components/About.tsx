import React from 'react'
import { Logo01 } from "@/components/logo";
import Image from 'next/image'

const AboutPage = () => {

  return (
    <section id="#about" className='px-[5%] py-16 md:py-32 '>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-blue-800">
          The OnPoint Difference
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">

              <Image 
                src="https://images.unsplash.com/photo-1648824571549-c3bc7946d603?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="hidden rounded-[15px] dark:block" 
                alt="POS illustration dark" 
                width={1207} 
                height={929} 
              />
              <Image 
                src="https://images.unsplash.com/photo-1648824571549-c3bc7946d603?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="rounded-[15px] shadow dark:hidden" 
                alt="POS illustration light" 
                width={1207} 
                height={929} 
              />

            </div>
          </div>

            <div className="relative space-y-4">
              <p className="text-zinc-500">
                <span className='text-blue-800 font-bold'> Innovative POS system in the Philippines </span> designed to streamline sales, track inventory, and help Filipino businesses grow faster.
              </p>
              <p className="text-muted-foreground">
                Our mission is to empower businesses with the tools they need to succeed in a competitive landscape.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>OnPoint has transformed the way we manage our sales and inventory. Highly recommend!</p> 

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium">John Doe, CEO</cite>
                    <Logo01 className='mt-2 h-5 w-auto' />
                  </div>
                  
                </blockquote>
              </div>
              
            </div>
        </div>
        
      </div>
      <div className="mt-16 flex items-center justify-center">
          <div className="w-full bg-blue-800 rounded-2xl overflow-hidden">

            <div className="relative mx-auto max-w-5xl px-6 py-8 md:py-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Why OnPoint?</h2>
              <p className="mt-6 text-lg text-blue-100">Because after switching to us...</p>
              
              <div className="mt-8 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 justify-center">
                {/* Stat 1 */}
                <div className="group bg-blue-600/40 backdrop-blur-sm rounded-xl px-6 py-8 hover:bg-blue-900/50 transition duration-300">
                  <span className="text-6xl font-bold text-white block">96%</span>
                  <p className="mt-6 text-lg text-blue-100 group-hover:text-white transition">
                    of users report improved efficiency in managing sales
                  </p>
                </div>
                
                {/* Stat 2 */}
                <div className="group bg-blue-600/40 backdrop-blur-sm rounded-xl px-6 py-8 hover:bg-blue-900/50 transition duration-300">
                  <span className="text-6xl font-bold text-white block">95%</span>
                  <p className="mt-6 text-lg text-blue-100 group-hover:text-white transition">
                    of users report increased sales and customer satisfaction
                  </p>
                </div>
                
                {/* Stat 3 */}
                <div className="group bg-blue-600/40 backdrop-blur-sm rounded-xl px-6 py-8 hover:bg-blue-900/50 transition duration-300">
                  <span className="text-6xl font-bold text-white block">87%</span>
                  <p className="mt-6 text-lg text-blue-100 group-hover:text-white transition">
                    of users report deeper insights from their data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      

    </section>
  )
}

export default AboutPage