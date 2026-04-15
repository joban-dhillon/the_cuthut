import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { GoogleReviews } from '@/components/GoogleReviews';

const featuredServices = [
  {
    title: 'Precision Haircuts',
    description: 'Expertly tailored cuts that complement your face shape and lifestyle.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Luxury Coloring',
    description: 'From subtle highlights to bold transformations using premium products.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Balayage Artistry',
    description: 'Hand-painted sun-kissed results for a natural, low-maintenance glow.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The best hair experience I’ve ever had! The attention to detail and the atmosphere are unmatched. My color has never looked better.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'Finally found a stylist who truly listens. The cuthut is a gem in Brampton. Highly recommend for anyone looking for premium service.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Luxury feel without the pretentiousness. I felt so pampered and my hair feels incredibly healthy after the keratin treatment.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter mb-6 leading-tight">
              Elevate Your Hair.<br />
              <span className="italic font-normal">Elevate Your Confidence.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto opacity-90">
              Premium hair care, color & styling tailored for you. 
              Experience the art of transformation at Brampton's premier salon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg bg-white text-black hover:bg-white/90">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg border-white text-white hover:bg-white hover:text-black">
                <Link to="/contact">Call Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Stylist at Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl hidden lg:block">
                <p className="font-serif text-4xl font-bold text-primary">10+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Years of Expertise</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground">About The cuthut</h2>
              <h3 className="font-serif text-4xl md:text-6xl font-light leading-tight">
                Where Luxury Meets <span className="italic">Personalized Care</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At The cuthut, we believe your hair is your most important accessory. 
                Our team of expert stylists is dedicated to providing a bespoke experience 
                that leaves you feeling refreshed, beautiful, and confident.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use only the finest professional products and the latest techniques 
                to ensure your hair remains healthy and vibrant long after you leave our salon.
              </p>
              <Button asChild variant="link" className="p-0 text-primary text-lg group">
                <Link to="/about" className="flex items-center">
                  Learn Our Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground">Our Expertise</h2>
            <h3 className="font-serif text-4xl md:text-7xl font-light">Signature <span className="italic">Services</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-none bg-transparent group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-0 space-y-4">
                    <h4 className="font-serif text-3xl font-medium tracking-tight">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">{service.description}</p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                      <Link to="/services">Explore Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground">The cuthut Difference</h2>
                <h3 className="font-serif text-4xl md:text-6xl font-light leading-tight">
                  Why Our Clients <br /><span className="italic">Trust Us</span>
                </h3>
              </div>
              
              <div className="space-y-10">
                {[
                  { title: 'Expert Stylists', desc: 'Our team masters the latest global trends and techniques to deliver perfection.' },
                  { title: 'Premium Products', desc: 'We exclusively use high-end, professional-grade formulas that nourish your hair.' },
                  { title: 'Bespoke Experience', desc: 'Every service is tailored to your unique features, lifestyle, and hair goals.' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center font-serif text-xl italic text-primary">
                      0{i + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-sm">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                  alt="Salon Experience" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl hidden md:block max-w-xs">
                <p className="font-serif text-2xl italic text-primary mb-2">"The attention to detail is simply unmatched."</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">— Verified Client</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
            <div className="md:w-1/3 space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground">Client Love</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                What Our Clients <span className="italic">Are Saying</span>
              </h3>
              <div className="flex items-center space-x-2 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                <span className="text-black font-bold ml-2">4.9/5</span>
              </div>
              <p className="text-muted-foreground">Based on 150+ Google Reviews</p>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg text-muted-foreground leading-relaxed font-light italic">
                "We take pride in every transformation. Our clients' satisfaction is our greatest reward, 
                and we are honored to be part of their beauty journey."
              </p>
            </div>
          </div>
          
          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tighter mb-6">
              Ready for Your <span className="italic">Transformation?</span>
            </h2>
            <p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mx-auto mb-10">
              Book your appointment today and experience the premium hair care you deserve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-12 py-8 text-lg bg-white text-black hover:bg-white/90">
                <Link to="/booking">Book Your Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-12 py-8 text-lg border-white text-white hover:bg-white hover:text-black">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
