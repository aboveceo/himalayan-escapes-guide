import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Atithi Devo Bhava",
      description: "We treat every guest like a god, following the ancient Sanskrit principle of hospitality."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Local Expertise",
      description: "Our local guides provide authentic insights and personal connections to Nepal's culture."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Quality Service",
      description: "We ensure every detail of your journey meets the highest standards of excellence."
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Sustainable Tourism",
      description: "We promote responsible travel that benefits local communities and preserves nature."
    }
  ];

  const team = [
    {
      name: "Raj Kumar Sharma",
      role: "Founder & Chief Guide",
      experience: "15+ years",
      description: "Born and raised in Kathmandu, Raj has been sharing Nepal's beauty with travelers for over 15 years."
    },
    {
      name: "Sita Lama",
      role: "Cultural Specialist",
      experience: "12+ years", 
      description: "Expert in Nepalese traditions, festivals, and Buddhist philosophy with deep cultural knowledge."
    },
    {
      name: "Pemba Sherpa",
      role: "Mountain Guide",
      experience: "20+ years",
      description: "Experienced high-altitude guide specializing in Everest and Annapurna region treks."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          About CTB Tours
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          We are a family-run travel company based in Kathmandu, Nepal, dedicated to providing authentic 
          and personalized travel experiences that showcase the true spirit of Nepal.
        </p>
        <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-lg">
            To create meaningful connections between travelers and Nepal through authentic experiences, 
            local homestays, and genuine hospitality that goes beyond typical tourism.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">From Local Roots to Global Connections</h3>
            <p className="text-muted-foreground mb-6">
              CTB Tours was founded in 2008 by a group of local friends who shared a passion for their homeland 
              and a desire to share its beauty with the world. What started as informal guidance for visiting 
              friends has grown into a trusted travel company.
            </p>
            <p className="text-muted-foreground mb-6">
              Our name 'CTB' represents our core values: Culture, Tradition, and Beauty - the three pillars 
              that define the Nepal experience we want to share with every traveler.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to operate as a family business, ensuring every guest receives the personal 
              attention and authentic experience that only locals can provide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-lg h-96 flex items-center justify-center">
            <Users className="h-32 w-32 text-white" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {member.role}
                </CardDescription>
                <CardDescription>
                  {member.experience} experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose CTB Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🏠 Authentic Homestays</h3>
              <p className="mb-6">
                Stay with local families and experience Nepal the way locals do. Our homestay network 
                offers genuine cultural immersion.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">👥 Local Guides</h3>
              <p>
                Our guides aren't just knowledgeable - they're your local friends who share personal 
                stories and hidden gems you won't find in guidebooks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">💰 Fair Pricing</h3>
              <p className="mb-6">
                No hidden costs, no overcharging. We believe in transparent pricing that provides 
                excellent value for authentic experiences.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">🎯 Personalized Service</h3>
              <p>
                Every traveler is unique. We customize itineraries based on your interests, budget, 
                and travel style for a truly personal journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Nepal Like a Local?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the hundreds of travelers who have discovered the real Nepal with CTB Tours. 
          Let us plan your authentic Nepal adventure today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Plan Your Journey
          </Button>
          <Button size="lg" variant="outline">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;