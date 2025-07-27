import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      id: "kathmandu",
      name: "Kathmandu",
      description: "The historic capital city of Nepal, home to ancient temples, palaces, and UNESCO World Heritage Sites.",
      image: "/images/kathmandu.jpg",
      duration: "2-3 days",
      rating: 4.8,
      highlights: ["Pashupatinath Temple", "Boudhanath Stupa", "Durbar Square", "Swayambhunath"]
    },
    {
      id: "pokhara", 
      name: "Pokhara",
      description: "A beautiful lake city nestled in the foothills of the Himalayas with stunning mountain views.",
      image: "/images/pokhara.jpg",
      duration: "3-4 days",
      rating: 4.9,
      highlights: ["Phewa Lake", "Sarangkot Sunrise", "Davis Falls", "World Peace Pagoda"]
    },
    {
      id: "lumbini",
      name: "Lumbini", 
      description: "The birthplace of Lord Buddha and a UNESCO World Heritage Site of great spiritual significance.",
      image: "/images/lumbini.jpg",
      duration: "1-2 days",
      rating: 4.7,
      highlights: ["Maya Devi Temple", "Ashoka Pillar", "Monasteries", "Sacred Garden"]
    },
    {
      id: "chitwan",
      name: "Chitwan National Park",
      description: "Nepal's first national park, famous for wildlife safaris and jungle adventures.",
      image: "/images/chitwan.jpg", 
      duration: "2-3 days",
      rating: 4.6,
      highlights: ["Rhino Safari", "Elephant Bathing", "Jungle Walk", "Tharu Culture"]
    },
    {
      id: "mount-everest",
      name: "Mount Everest",
      description: "The world's highest peak and ultimate adventure destination for trekkers and mountaineers.",
      image: "/images/everest.jpg",
      duration: "14-21 days",
      rating: 5.0,
      highlights: ["Everest Base Camp", "Kala Patthar", "Sherpa Culture", "Himalayan Views"]
    },
    {
      id: "janakpur",
      name: "Janakpur",
      description: "An ancient religious city, birthplace of Goddess Sita and center of Maithili culture.",
      image: "/images/janakpur.jpg",
      duration: "1-2 days", 
      rating: 4.5,
      highlights: ["Janaki Temple", "Ram Mandir", "Maithili Art", "Religious Festivals"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Explore Nepal's Best Destinations
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the magic of Nepal through our carefully curated destinations. From ancient temples to majestic mountains, 
          each place offers unique experiences and unforgettable memories.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative">
              <MapPin className="h-20 w-20 text-white" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{destination.rating}</span>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{destination.name}</CardTitle>
                  <CardDescription className="text-base">
                    {destination.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>All Groups</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button asChild className="flex-1">
                  <Link to={`/destinations/${destination.id}`}>
                    Explore Details
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={`/packages?destination=${destination.id}`}>
                    View Packages
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Can't Decide Where to Go?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Let our local experts help you create the perfect Nepal itinerary based on your interests and preferences.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Get Personalized Recommendations</Link>
        </Button>
      </div>
    </div>
  );
};

export default Destinations;