import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="Salon Ambience" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="container relative z-10 px-4 text-center text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold opacity-70 mb-4">Our Heritage</h2>
            <h1 className="font-serif text-5xl md:text-9xl font-light tracking-tighter leading-none">
              The <span className="italic">Story</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground">Our Philosophy</h2>
                <h3 className="font-serif text-4xl md:text-7xl font-light leading-tight">
                  Elegance in Every <br /><span className="italic">Detail</span>
                </h3>
              </div>
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                <p>
                  Founded in 2014, The cuthut was born from a desire to redefine the salon experience. 
                  We believe that hair care is not just a service, but a ritual of self-love and transformation.
                </p>
                <p>
                  Our sanctuary in Brampton is designed to be a haven of tranquility, where modern 
                  artistry meets timeless elegance. Every stylist at The cuthut is a master of their craft, 
                  dedicated to the pursuit of hair perfection.
                </p>
                <p>
                  We don't just follow trends; we create looks that are uniquely yours, focusing on 
                  the health and integrity of your hair above all else.
                </p>
              </div>
              <div className="pt-6">
                <Button asChild variant="outline" className="rounded-full px-10 py-7 text-lg border-primary/20 hover:border-primary">
                  <Link to="/services">Explore Our Artistry</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600" 
                  alt="Styling Detail" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600" 
                  alt="Salon Interior" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6 pt-16">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" 
                  alt="Product Detail" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                  alt="Hair Detail" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Why Us */}
      <section className="py-32 bg-accent/10 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground">The cuthut Standard</h2>
            <h3 className="font-serif text-4xl md:text-6xl font-light tracking-tight">Our <span className="italic">Commitment</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Artistic Excellence', desc: 'Our stylists are global trend-setters, mastering the most advanced techniques in the industry.' },
              { title: 'Pure Integrity', desc: 'We exclusively use premium, eco-conscious products that prioritize the long-term health of your hair.' },
              { title: 'Personalized Care', desc: 'Every journey begins with a deep consultation, ensuring your vision is brought to life with precision.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-lg font-serif text-2xl italic text-primary">
                  {index + 1}
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold uppercase tracking-widest text-sm">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tighter leading-tight">
              Experience the <br /><span className="italic">Extraordinary</span>
            </h2>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-serif shadow-2xl shadow-primary/20">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
