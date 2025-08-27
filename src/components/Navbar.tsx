'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {navItems} from '../data/data'
import Image from 'next/image'

const Navbar = () => {
  const [navState, setNavState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll',handleScroll)
  
    return () => window.removeEventListener('scroll',handleScroll)
   },[])

  return (
    <header>
        <nav data-state={navState && 'active'} className='fixed z-20 w-full px-2 '>
            <div className={cn(
                'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 will-change-transform', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
                )}>
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 ">
                    <div className="flex w-full justify-between lg:w-auto items-center gap-6">
                        <Link 
                            href='/'
                            aria-label='home'
                            className="flex item-center space-x-2 relative"
                        >
                            <Image
                                src='/images/logo.jpg'
                                alt='OnpointLogo'
                                className="rounded-4xl"
                                width={45}
                                height={45}
                            />
                        </Link>
                        <ul className=" hidden lg:flex gap-8 text-sm font-medium ">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-800 hover:text-blue-800 block duration-150 hover:scale-105">
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        
                        <button
                            onClick={() => setNavState(!navState)}
                            aria-label={navState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" 
                        />
                        </button>
                        
                    </div>
                    

                    {/* Mobile Menu */}
                    <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-blue-500/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">

                        <div className="lg:hidden">
                            <ul className="space-y-6 text-base">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-blue-800 block duration-150 text-center">
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                            <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled && 'lg:hidden','bg-blue-800 hover:bg-blue-700')}>
                                <Link href="/">
                                    <span>Get Started</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled ? 'lg:inline-flex' : 'hidden','bg-blue-800 hover:bg-blue-700')}>
                                <Link href="/">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                            
                        </div>
                     
                     
                    </div>

                </div>

            </div>

        </nav>

    </header>
  )
}

export default Navbar