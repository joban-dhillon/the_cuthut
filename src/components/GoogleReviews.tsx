import React, { useEffect, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Note: In a real production app, you would fetch this from your backend 
  // to keep your API key secure. For this demo, we'll simulate the fetch 
  // or use a public endpoint if available.
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // This is a placeholder for the actual Google Places API call
        // In a real app, you'd use: 
        // https://maps.googleapis.com/maps/api/place/details/json?place_id=PLACE_ID&fields=reviews&key=YOUR_API_KEY
        
        // Simulating a fetch with realistic data from "The cuthut"
        const mockReviews: Review[] = [
          {
            author_name: "Amrit Kaur",
            profile_photo_url: "https://picsum.photos/seed/amrit/100/100",
            rating: 5,
            relative_time_description: "a week ago",
            text: "The best salon in Brampton! I've been coming here for my balayage for years and they never disappoint. The atmosphere is so welcoming and professional."
          },
          {
            author_name: "Jessica Miller",
            profile_photo_url: "https://picsum.photos/seed/jessica/100/100",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "Found this gem recently. The precision in their haircuts is amazing. They really listen to what you want. Highly recommend!"
          },
          {
            author_name: "Sonia Sharma",
            profile_photo_url: "https://picsum.photos/seed/sonia/100/100",
            rating: 5,
            relative_time_description: "1 month ago",
            text: "Luxury experience from start to finish. My hair feels so healthy after the treatment. Definitely my new go-to spot."
          }
        ];

        // If we had an API key in process.env, we would do a real fetch here
        // const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
        // if (apiKey) { ... real fetch ... }

        setTimeout(() => {
          setReviews(mockReviews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        <p>{error}</p>
        <Button variant="link" onClick={() => window.location.reload()}>Try again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.author_name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-none bg-accent/10 p-8 rounded-[2rem] relative group hover:bg-accent/20 transition-colors">
              <Quote className="absolute top-6 right-6 text-primary/5 group-hover:text-primary/10 transition-colors" size={60} />
              <CardContent className="p-0 space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px]">{review.author_name}</p>
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-serif text-lg italic leading-relaxed text-primary/80">
                  "{review.text}"
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{review.relative_time_description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button asChild variant="outline" className="rounded-full px-10 py-7 border-primary/10 hover:border-primary group">
          <a 
            href="https://www.google.com/maps/place/The_cuthut/@43.765,-79.734,17z/data=!4m8!3m7!1s0x882b3d83f3bf40d9:0x31a7cce6cae58c26!8m2!3d43.765!4d-79.734!9m1!1b1!16s%2Fg%2F11vz57c8ls" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Write a Review on Google <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
}
