import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white px-[5%] py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or ready to transform your business? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you need..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
              
              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+63 (995) 425 2327</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Inquire@getonpoint.co</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>GF Mango Suites, Calao East, Santiago City</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Map */}
          <div className="h-[400px] md:h-full rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.0433766864109!2d121.55474965079571!3d16.696042711412506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900617445642b7%3A0xa276903f78f99070!2s1%20Maharlika%20Hwy%2C%20Santiago%2C%203311%20Isabela!5e0!3m2!1sen!2sph!4v1756442654451!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OnPoint POS Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


{/*
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.0433766864109!2d121.55474965079571!3d16.696042711412506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900617445642b7%3A0xa276903f78f99070!2s1%20Maharlika%20Hwy%2C%20Santiago%2C%203311%20Isabela!5e0!3m2!1sen!2sph!4v1756442654451!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    */}