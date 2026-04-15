import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="font-serif text-3xl md:text-4xl font-light tracking-tighter text-primary transition-transform group-hover:scale-105">
            The <span className="font-bold">cuthut</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-[10px] font-bold transition-all hover:text-primary uppercase tracking-[0.3em] relative py-2",
                location.pathname === item.path 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary" 
                  : "text-muted-foreground after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-full px-10 py-6 shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all">
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background border-l border-primary/10 shadow-2xl p-0">
              <nav className="flex flex-col space-y-2 mt-24 px-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 py-3 border-b border-primary/5",
                      location.pathname === item.path 
                        ? "text-primary translate-x-1" 
                        : "text-foreground/70 hover:text-primary hover:translate-x-1"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-10">
                  <Button asChild className="w-full rounded-full py-6 text-xs uppercase tracking-widest font-bold shadow-lg shadow-primary/10">
                    <Link to="/booking" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                  </Button>
                  <div className="mt-12 space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40">Contact Us</p>
                    <p className="text-sm font-medium text-foreground">+16474250244</p>
                    <p className="text-sm font-light text-foreground/60 leading-relaxed">25 Morning Dew Crescent, Brampton, ON L6R 1K5</p>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-24 border-t border-primary-foreground/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-light tracking-tighter">
                The <span className="font-bold">cuthut</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed font-light max-w-xs">
              A sanctuary of hair artistry in Brampton. We believe in the power of transformation 
              through precision, passion, and premium care.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="#" className="text-primary-foreground/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground/40 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] opacity-50">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/60 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] opacity-50">Our Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/services" className="text-primary-foreground/60 hover:text-white transition-colors">Precision Haircuts</Link></li>
              <li><Link to="/services" className="text-primary-foreground/60 hover:text-white transition-colors">Artistic Coloring</Link></li>
              <li><Link to="/services" className="text-primary-foreground/60 hover:text-white transition-colors">Signature Balayage</Link></li>
              <li><Link to="/services" className="text-primary-foreground/60 hover:text-white transition-colors">Restorative Treatments</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] opacity-50">Contact Us</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-primary-foreground/30 mt-1" />
                <span className="text-primary-foreground/60 leading-relaxed">
                  25 Morning Dew Crescent,<br />
                  Brampton, ON L6R 1K5
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-primary-foreground/30" />
                <span className="text-primary-foreground/60">+16474250244</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-primary-foreground/30">
          <p>© {new Date().getFullYear()} The cuthut Salon. All rights reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
