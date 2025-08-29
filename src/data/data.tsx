import {
  ChartSpline,
  Clock,
  Cog,
  Package,
  Smartphone,
  Zap,
  Bike,
  Coffee,
  Gift,
  Store,
  ShoppingBag,
  Sofa
} from "lucide-react";


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




export const Testimonials = [
  {
     id: 1,
     name: "John Doe",
     position: "CEO",
     company: "Example Corp",
     testimonial: "OnPoint has transformed the way we manage our sales and inventory. Highly recommend!",
     avatar:"https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
     id: 2,
     name: "Maria Santos",
     position: "Store Owner",
     company: "Santos Grocery",
     testimonial: "As a small business owner, I needed something affordable yet powerful. OnPoint delivered exactly that and more!",
     avatar:"https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
     id: 3,
     name: "Ramon Reyes",
     position: "Operations Manager",
     company: "Metro Pharmacy Chain",
     testimonial: "The inventory tracking feature alone has saved us thousands in prevented stock-outs and overstock situations.",
     avatar:"https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
     id: 4,
     name: "Isabella Cruz",
     position: "Restaurant Manager",
     company: "Taste Haven",
     testimonial: "The 24/7 support team is incredible. They've helped us solve issues even during peak dinner hours!",
     avatar:"https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
     id: 5,
     name: "Antonio Garcia",
     position: "IT Director",
     company: "Retail Solutions Inc.",
     testimonial: "We've implemented OnPoint across 12 branches with zero compatibility issues. The cloud synchronization is seamless.",
     avatar:"https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
     id: 6,
     name: "Sophia Lim",
     position: "Finance Head",
     company: "Lim Enterprises",
     testimonial: "The reporting features have given us insights we never had before. Our decision-making is now data-driven and precise.",
     avatar:"https://randomuser.me/api/portraits/women/6.jpg"
  }
]


export const categories = [
    { icon: <Store className="h-6 w-6 text-blue-600" />, name: 'Sari-sari Store' },
    { icon: <Bike className="h-6 w-6 text-blue-600" />, name: 'Cycle Store' },
    { icon: <Gift className="h-6 w-6 text-blue-600" />, name: 'Gift Shop' },
    { icon: <Sofa className="h-6 w-6 text-blue-600" />, name: 'Furniture Store' },
    { icon: <ShoppingBag className="h-6 w-6 text-blue-600" />, name: 'Clothing Store' },
    { icon: <Coffee className="h-6 w-6 text-blue-600" />, name: 'Coffee Shop' },
  ];


const tooltipContent = {
  users: "Number of staff accounts that can access the POS system simultaneously.",
  branches: "Number of different store locations that can use the system with centralized management.",
  support: "Priority level determines response time and support channel availability.",
  integrations: "Connect with accounting software, e-commerce platforms, and payment processors.",
  offline: "Continue operating even when internet connection is unavailable.",
};


export const plans = [
  {
    name: "Basic",
    price: 1500,
    description:
      "Perfect for small businesses and startups looking for an affordable POS solution.",
    features: [
      { title: "2 user accounts", tooltip: tooltipContent.users },
      { title: "Single branch", tooltip: tooltipContent.branches },
      { title: "Standard support (8AM-5PM)", tooltip: tooltipContent.support },
      { title: "Basic reporting" },
      { title: "Inventory management" },
      { title: "Offline mode", tooltip: tooltipContent.offline },
    ],
  },
  {
    name: "Business",
    price: 3000,
    isRecommended: true,
    description:
      "Ideal for growing businesses with multiple staff members and expanded needs.",
    features: [
      { title: "5 user accounts", tooltip: tooltipContent.users },
      { title: "Up to 3 branches", tooltip: tooltipContent.branches },
      { title: "Priority support (24/7)", tooltip: tooltipContent.support },
      { title: "Advanced reporting & analytics" },
      { title: "3 integrations", tooltip: tooltipContent.integrations },
      { title: "Customer loyalty program" },
      { title: "Offline mode", tooltip: tooltipContent.offline },
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: 5000,
    description:
      "Complete solution for established businesses with multiple locations and complex operations.",
    features: [
      { title: "Unlimited user accounts", tooltip: tooltipContent.users },
      { title: "Unlimited branches", tooltip: tooltipContent.branches },
      { title: "Priority support (24/7)", tooltip: tooltipContent.support },
      { title: "Custom reporting & data exports" },
      { title: "Unlimited integrations", tooltip: tooltipContent.integrations },
      { title: "Offline mode", tooltip: tooltipContent.offline },
    ],
  },
];


export const faq = [
  {
    question: "How long does it take to set up OnPoint POS?",
    answer: "Most businesses are up and running within 24-48 hours. Our team handles the entire setup process, including system configuration, menu/inventory upload, and staff training."
  },
  {
    question: "Do I need specific hardware to use OnPoint?",
    answer: "OnPoint works with most standard POS hardware. For new setups, we recommend our pre-configured hardware bundles. The system also works on tablets and smartphones for maximum flexibility."
  },
  {
    question: "What happens if my internet connection goes down?",
    answer: "OnPoint includes offline mode functionality that allows you to continue processing transactions even without internet. Once connectivity is restored, all data automatically syncs to the cloud."
  },
  {
    question: "Can I integrate OnPoint with my accounting software?",
    answer: "Yes, OnPoint integrates seamlessly with popular accounting platforms like QuickBooks and Xero. We also offer integrations with e-commerce platforms, payment processors, and delivery services."
  },
  {
    question: "Can OnPoint handle multiple branches or locations?",
    answer: "Yes, our Business and Enterprise plans support multiple branches with centralized management. You can view reports for individual locations or consolidated across all branches from a single dashboard."
  }
]