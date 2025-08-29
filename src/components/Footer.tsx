import React from "react";
import Link from "next/link";
import { navItems } from "@/data/data";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.jpg" alt="OnPoint Logo" width={150} height={50}  className="rounded-lg"/>
            </Link>
            <p className="text-blue-100 mt-4 text-sm">
              Empowering Filipino businesses with innovative and reliable POS technology that drives growth.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-blue-100 hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info - From Contact.tsx */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-blue-100">
              <p>GF Mango Suites, Calao East, Santiago City</p>
              <p className="mt-4">
                <a href="tel:+63995425232" className="hover:text-white transition-colors">
                  +63 (995) 425 2327
                </a>
              </p>
              <p>
                <a href="mailto:Inquire@getonpoint.co" className="hover:text-white transition-colors">
                  Inquire@getonpoint.co
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Stay updated with our latest features and releases.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-accent text-white placeholder:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {year} OnPoint. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;