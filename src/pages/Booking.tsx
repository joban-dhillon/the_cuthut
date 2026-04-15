import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Booking() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-accent/20 py-32 border-b">
        <div className="container mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4">Reservations</h2>
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter leading-none">
              Book Your <span className="italic">Visit</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light mt-8">
              Secure your appointment at The cuthut and prepare for a transformative experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
                  Seamless <br /><span className="italic">Scheduling</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                  We value your time. Our integrated booking system allows you to select your preferred 
                  stylist and service in just a few clicks.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: 'Select Your Service', desc: 'Choose from our range of precision cuts, coloring, or treatments.' },
                  { title: 'Choose Your Stylist', desc: 'Select your preferred expert or let us recommend the best fit.' },
                  { title: 'Confirm & Relax', desc: 'Receive instant confirmation and a reminder before your visit.' },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center font-serif italic text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold uppercase tracking-widest text-sm">{step.title}</h4>
                      <p className="text-muted-foreground text-sm font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-serif shadow-2xl shadow-primary/20 w-full sm:w-auto">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Open Booking Widget
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  * For group bookings or special events, please contact us directly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/booking-img/1000/1250" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white space-y-2">
                  <p className="font-serif text-3xl italic">"Your transformation begins the moment you walk through our doors."</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">— The cuthut Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Reassurance */}
      <section className="py-24 bg-accent/10 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Cancellation Policy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                We kindly request at least 24 hours notice for any cancellations or rescheduling. 
                This allows us to offer the appointment time to another client.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Arrival Time</h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                Please arrive 5-10 minutes prior to your scheduled appointment to relax and 
                prepare for your service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
