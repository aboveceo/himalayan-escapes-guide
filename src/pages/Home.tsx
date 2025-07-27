import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, House, DollarSign, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const destinations = [
    {
      name: "Mount Everest",
      image: "/images/mount-everest.jpg",
      description: "World's highest peak adventure",
      link: "/destinations/mount-everest"
    },
    {
      name: "Kathmandu",
      image: "/images/kathmandu.jpg", 
      description: "Historic capital city",
      link: "/destinations/kathmandu"
    },
    {
      name: "Pokhara",
      image: "/images/pokhara.jpg",
      description: "Beautiful lake city",
      link: "/destinations/pokhara"
    },
    {
      name: "Lumbini",
      image: "/images/lumbini.jpg",
      description: "Birthplace of Buddha",
      link: "/destinations/lumbini"
    },
    {
      name: "Chitwan",
      image: "/images/chitwan.jpg",
      description: "Wildlife national park",
      link: "/destinations/chitwan"
    },
    {
      name: "Janakpur",
      image: "/images/janakpur.jpg",
      description: "Ancient religious city",
      link: "/destinations/janakpur"
    }
  ];

  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Local Tour Guide",
      description: "Get access to a local tour guide and explore Nepal like never before."
    },
    {
      icon: <House className="h-12 w-12 text-primary" />,
      title: "Home Stay",
      description: "We want your Nepal tour to be personalized with a Home Stay & home food experience."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "No Overcharge",
      description: "We believe that your Nepal tour should be cost effective with experience like royal."
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Personalized",
      description: "We try to build plan that is personalized as per your need & budget."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Spiritual Tour Guide In Nepal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Authentic Nepal tours with custom itineraries and local homestays—affordable, personal, and truly unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              Get Call Back
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atithi Devo Bhava Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Atithi Devo Bhava (अतिथि देवो भव)
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            At CTB Tours, we live by the timeless value of अतिथिदेवो भव, which means "Treat Guest Like A God." 
            This is not just a saying—it's the heart of how we treat every traveler in Nepal "AS A FAMILY"
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Plan Your Trip With Us
          </Button>
        </div>
      </section>

      {/* Top Places Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Top Places To Visit In Nepal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link key={index} to={destination.link}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-white" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{destination.name}</CardTitle>
                    <CardDescription className="text-center">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Nepal?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us create your perfect Nepal adventure with personalized itineraries and local experiences.
          </p>
          <Button size="lg" variant="secondary">
            Start Planning Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;