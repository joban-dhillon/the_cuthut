import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 1, title: 'Platinum Blonde Transformation', category: 'Color', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Soft Balayage Waves', category: 'Styling', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Precision Bob Cut', category: 'Cut', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Caramel Highlights', category: 'Color', src: 'https://images.unsplash.com/photo-1552662790-38f4ed059378?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Bridal Updo', category: 'Styling', src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Vibrant Red Transformation', category: 'Color', src: 'https://images.unsplash.com/photo-1527799822340-474058a67bb0?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Long Layered Cut', category: 'Cut', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Honey Blonde Balayage', category: 'Color', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Sleek Keratin Result', category: 'Treatment', src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800' },
];

export default function Gallery() {
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
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4">The Portfolio</h2>
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tighter leading-none">
              Artistry in <span className="italic">Motion</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light mt-8">
              A collection of our finest transformations, showcasing the skill and passion of our stylists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-[4/5]">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{image.category}</p>
                    <h4 className="text-white font-serif text-2xl italic">{image.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Instagram */}
      <section className="py-32 bg-secondary/20 border-y">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-4xl md:text-6xl font-light tracking-tight">Follow Our <span className="italic">Journey</span></h3>
            <p className="text-muted-foreground text-lg font-light">Join us on Instagram for daily inspiration and behind-the-scenes artistry.</p>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="rounded-full px-12 py-8 text-lg border-primary/20 hover:border-primary">
              @thecuthut_salon
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src={`https://picsum.photos/seed/hair${i}/400/400`} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
