import {ChartSpline,Clock,Cog,Package,Smartphone,Zap} from "lucide-react";

export const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Contact',
    href: '#contact',
  }
]

export const heroData = {
  heading: "OnPoint",
  subheading: " seamless POS solutions. ",
  description: "Trusted POS solution tailored to the needs of all kinds of businesses in the Philippines—small, medium, and beyond—backed by 24/7 support, 7 days a week.",
  buttons: {
    primary: {
      text: "Inquire Now",
      url: "#",
    },
    secondary: {
      text: "Learn More",
      url: "#",
    },
  },
  image: {
    src: "/images/POS.jpg",
    alt: "POS content",
  },
}

export const servicesData =[
  {
    icon:ChartSpline,
    title: "All in One Dashboard" ,
    description: "Oversee sales, inventory, and staff from a single hub"
  },
  {
    icon:Zap,
    title:"Instant Reports",
    description: "Access real-time insights without the hassle of manual logs"
  },
  {
    icon: Cog,
    title:"Quick and Simple Setup",
    description: "Be up and running in minutes - no technical expertise required"
  },
  {
    icon:Clock,
    title:"24/7 Support",
    description: "Get help via video call or let our team assist you onsite"
  },
  {
    icon: Package,
    title: "Smart Inventory Control",
    description: "Automatically track stock levels and get low inventory alerts"
  },
  {
    icon: Smartphone,
    title: "Mobile POS",
    description: "Take payments and manage your business from any mobile device"
  }
]
