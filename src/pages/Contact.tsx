import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
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
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4">Connect With Us</h2>
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter leading-none">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light mt-8">
              Whether you have a question or are ready to begin your hair journey, we are here to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="space-y-12">
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">Visit Our <br /><span className="italic">Sanctuary</span></h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <MapPin size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Location</h4>
                      <p className="text-lg font-light leading-relaxed">
                        25 Morning Dew Crescent,<br />
                        Brampton, ON L6R 1K5
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <Phone size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Reservations</h4>
                      <p className="text-lg font-light leading-relaxed">+16474250244</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <Mail size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Inquiries</h4>
                      <p className="text-lg font-light leading-relaxed">hello@thecuthut.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <Clock size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Salon Hours</h4>
                      <ul className="text-lg font-light space-y-1">
                        <li className="flex justify-between w-72"><span>Mon - Sun:</span> <span>10:00 AM - 8:00 PM</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary/20 p-12 md:p-20 rounded-[3.5rem] shadow-2xl"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-light italic">Send a Message</h3>
                  <p className="text-muted-foreground font-light">We aim to respond to all inquiries within 24 hours.</p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-50">Full Name</Label>
                      <Input id="name" placeholder="E.g. Alexandra Smith" className="bg-white border-none h-16 rounded-2xl px-8 shadow-sm focus-visible:ring-primary/20" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-50">Phone Number</Label>
                      <Input id="phone" placeholder="E.g. (647) 000-0000" className="bg-white border-none h-16 rounded-2xl px-8 shadow-sm focus-visible:ring-primary/20" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-50">Email Address</Label>
                    <Input id="email" type="email" placeholder="E.g. alexandra@example.com" className="bg-white border-none h-16 rounded-2xl px-8 shadow-sm focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-50">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us about your hair goals..." className="bg-white border-none min-h-[180px] rounded-[2rem] p-8 shadow-sm focus-visible:ring-primary/20" />
                  </div>
                </div>

                <Button className="w-full rounded-full py-9 text-xl font-serif tracking-wide shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Send Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[700px] w-full bg-muted overflow-hidden relative border-t">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.288226941566!2d-79.734!3d43.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d83f3bf40d9%3A0x31a7cce6cae58c26!2s25%20Morning%20Dew%20Crescent%2C%20Brampton%2C%20ON%20L6R%201K5!5e0!3m2!1sen!2sca!4v1713000000000!5m2!1sen!2sca" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="The cuthut Location"
        ></iframe>
        <div className="absolute top-10 left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-xs border border-primary/5">
          <h4 className="font-serif text-2xl italic mb-4">Find Us</h4>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Located in the heart of Brampton, our salon is easily accessible with ample parking available for our guests.
          </p>
        </div>
      </section>
    </div>
  );
}
