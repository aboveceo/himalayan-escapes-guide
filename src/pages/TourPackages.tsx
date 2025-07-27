import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Star } from "lucide-react";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Kathmandu Cultural Heritage Tour",
      duration: "3 Days / 2 Nights",
      price: "$299",
      rating: 4.8,
      groupSize: "2-15 people",
      description: "Explore the rich cultural heritage of Kathmandu valley with visits to UNESCO World Heritage Sites.",
      highlights: ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Kathmandu Durbar Square"],
      includes: ["Accommodation", "Guide", "Transportation", "Entrance Fees"],
      image: "/images/kathmandu-package.jpg"
    },
    {
      id: 2,
      name: "Everest Base Camp Trek",
      duration: "14 Days / 13 Nights", 
      price: "$1,299",
      rating: 5.0,
      groupSize: "6-12 people",
      description: "The ultimate adventure to the base of the world's highest mountain with stunning Himalayan views.",
      highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"],
      includes: ["Trekking Permits", "Guide & Porter", "Tea House Stay", "Meals"],
      image: "/images/everest-package.jpg"
    },
    {
      id: 3,
      name: "Pokhara Lake & Mountain Experience",
      duration: "4 Days / 3 Nights",
      price: "$399",
      rating: 4.9,
      groupSize: "2-10 people", 
      description: "Enjoy the serene beauty of Pokhara with lake activities and mountain sunrise views.",
      highlights: ["Phewa Lake Boating", "Sarangkot Sunrise", "World Peace Pagoda", "Davis Falls"],
      includes: ["Lakeside Hotel", "Boat Rides", "Sunrise Tour", "Local Guide"],
      image: "/images/pokhara-package.jpg"
    },
    {
      id: 4,
      name: "Lumbini Spiritual Journey",
      duration: "2 Days / 1 Night",
      price: "$199",
      rating: 4.7,
      groupSize: "4-20 people",
      description: "A peaceful pilgrimage to the birthplace of Lord Buddha with meditation and cultural experiences.",
      highlights: ["Maya Devi Temple", "Sacred Garden", "Monasteries", "Meditation Sessions"],
      includes: ["Hotel Stay", "Spiritual Guide", "Temple Visits", "Cultural Program"],
      image: "/images/lumbini-package.jpg"
    },
    {
      id: 5,
      name: "Chitwan Wildlife Safari",
      duration: "3 Days / 2 Nights",
      price: "$349", 
      rating: 4.6,
      groupSize: "4-16 people",
      description: "Experience Nepal's wildlife with jungle safaris, elephant encounters, and Tharu cultural shows.",
      highlights: ["Rhino Safari", "Elephant Bathing", "Jungle Walk", "Tharu Dance"],
      includes: ["Jungle Lodge", "All Safaris", "Cultural Show", "All Meals"],
      image: "/images/chitwan-package.jpg"
    },
    {
      id: 6,
      name: "Nepal Golden Triangle",
      duration: "7 Days / 6 Nights",
      price: "$799",
      rating: 4.8,
      groupSize: "4-12 people",
      description: "Complete Nepal experience covering Kathmandu, Pokhara, and Chitwan in one comprehensive tour.",
      highlights: ["Cultural Sites", "Mountain Views", "Wildlife Safari", "Local Experiences"],
      includes: ["Hotels", "Transportation", "All Tours", "Some Meals"],
      image: "/images/golden-triangle.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Nepal Tour Packages
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover Nepal with our carefully crafted tour packages. From cultural heritage tours to adventurous treks, 
          find the perfect journey that matches your interests and budget.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center relative">
              <MapPin className="h-16 w-16 text-white" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{pkg.rating}</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-black">
                  {pkg.duration}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base mb-3">
                    {pkg.description}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{pkg.groupSize}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Package Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Custom Package Request</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Don't see a package that fits your needs? Let us create a personalized tour package just for you!
        </p>
        <Button size="lg">
          Request Custom Package
        </Button>
      </div>
    </div>
  );
};

export default TourPackages;