import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const serviceCategories = [
  {
    title: 'Haircuts & Styling',
    description: 'Precision cutting and bespoke styling designed to enhance your unique features and personal style.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    items: [
      { name: 'Women’s Haircut & Style', price: 'from $65' },
      { name: 'Signature Blowout', price: 'from $45' },
      { name: 'Formal Updo & Styling', price: 'from $85' },
      { name: 'Precision Bang Trim', price: '$15' },
    ]
  },
  {
    title: 'Hair Coloring',
    description: 'Expert color artistry using premium, hair-loving formulas to achieve depth, dimension, and brilliance.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    items: [
      { name: 'Full Dimensional Color', price: 'from $95' },
      { name: 'Root Refresh', price: 'from $75' },
      { name: 'Partial Highlights', price: 'from $110' },
      { name: 'Full Highlights', price: 'from $160' },
      { name: 'Signature Balayage', price: 'from $180' },
      { name: 'Color Correction', price: 'Consultation' },
    ]
  },
  {
    title: 'Hair Treatments',
    description: 'Restorative therapies that nourish, repair, and protect, leaving your hair with a healthy, radiant glow.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    items: [
      { name: 'Deep Conditioning Ritual', price: '$35' },
      { name: 'Keratin Smoothing', price: 'from $250' },
      { name: 'Detoxifying Scalp Treatment', price: '$55' },
      { name: 'Olaplex Bond Repair', price: '$45' },
    ]
  }
];

export default function Services() {
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
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4">The Experience</h2>
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter leading-none">
              Our <span className="italic">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light mt-8">
              A curated selection of premium hair care, color, and styling services 
              tailored to your individual beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-40">
            {serviceCategories.map((category, catIndex) => (
              <div key={category.title} className="flex flex-col space-y-16">
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                  catIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}>
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl group",
                      catIndex % 2 === 1 ? "lg:order-last" : ""
                    )}
                  >
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
                        {category.title.split(' & ')[0]} <br />
                        <span className="italic">& {category.title.split(' & ')[1] || category.title.split(' ')[1]}</span>
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                        {category.description}
                      </p>
                    </div>

                    <div className="space-y-8">
                      {category.items.map((item) => (
                        <div key={item.name} className="group cursor-default">
                          <div className="flex justify-between items-end mb-4">
                            <h4 className="font-sans text-lg md:text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-serif text-lg md:text-xl italic text-primary/40 group-hover:text-primary/80 transition-colors">
                              {item.price}
                            </span>
                          </div>
                          <Separator className="bg-border/40 group-hover:bg-primary/20 transition-colors" />
                        </div>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="rounded-full px-10 py-7 text-lg border-primary/20 hover:border-primary">
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-32 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground">The First Step</h2>
              <h3 className="font-serif text-4xl md:text-6xl font-light leading-tight">
                Complimentary <br /><span className="italic">Consultation</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Not sure which service is right for you? We offer complimentary 15-minute consultations 
                to discuss your hair goals, assess your hair health, and provide a personalized plan 
                and price estimate.
              </p>
              <ul className="space-y-4">
                {[
                  'Hair health assessment',
                  'Color matching & inspiration',
                  'Maintenance & product advice',
                  'Transparent pricing estimate'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="default" className="rounded-full px-10 py-7 text-lg">
                <Link to="/contact">Request Consultation</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1000" 
                alt="Consultation Session" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 bg-accent/10 border-y">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-3xl font-light italic">A Note on Pricing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our prices reflect the expertise of our stylists and the quality of the products we use. 
              Final pricing may vary based on hair length, density, and the complexity of the service. 
              We recommend a complimentary consultation for all new color clients.
            </p>
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
            <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tighter">
              Begin Your <span className="italic">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto mt-6">
              Step into a world of luxury and let our experts transform your hair.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-serif shadow-2xl shadow-primary/20">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-12 py-8 text-xl font-serif hover:bg-accent/20">
                <Link to="/contact">Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
