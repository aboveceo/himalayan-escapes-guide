import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MapPin, Mountain, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Wiki = () => {
  const categories = [
    {
      name: "Destinations",
      icon: <MapPin className="h-8 w-8" />,
      count: 25,
      description: "Explore cities, valleys, and regions across Nepal"
    },
    {
      name: "Monuments",
      icon: <Building className="h-8 w-8" />,
      count: 45,
      description: "Ancient palaces, stupas, and historical structures"
    },
    {
      name: "Temples", 
      icon: <Building className="h-8 w-8" />,
      count: 35,
      description: "Sacred Hindu and Buddhist temples"
    },
    {
      name: "Mountains",
      icon: <Mountain className="h-8 w-8" />,
      count: 20,
      description: "Peaks, trekking routes, and mountain information"
    }
  ];

  const featuredArticles = [
    {
      title: "Pashupatinath Temple",
      category: "Temple",
      excerpt: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River.",
      readTime: "5 min read",
      tags: ["Hindu", "UNESCO", "Kathmandu"],
      slug: "pashupatinath-temple"
    },
    {
      title: "Everest Base Camp",
      category: "Mountain",
      excerpt: "Complete guide to trekking to Everest Base Camp, including routes, permits, and preparation tips.",
      readTime: "12 min read", 
      tags: ["Trekking", "Adventure", "Himalayas"],
      slug: "everest-base-camp"
    },
    {
      title: "Boudhanath Stupa",
      category: "Monument", 
      excerpt: "One of the largest spherical stupas in Nepal and a UNESCO World Heritage Site.",
      readTime: "6 min read",
      tags: ["Buddhist", "UNESCO", "Kathmandu"],
      slug: "boudhanath-stupa"
    },
    {
      title: "Annapurna Circuit",
      category: "Mountain",
      excerpt: "Classic trekking route offering diverse landscapes, cultures, and mountain views.",
      readTime: "15 min read",
      tags: ["Trekking", "Circuit", "Annapurna"],
      slug: "annapurna-circuit"
    },
    {
      title: "Kathmandu Valley",
      category: "Destination",
      excerpt: "Historic valley containing three ancient cities: Kathmandu, Patan, and Bhaktapur.",
      readTime: "10 min read",
      tags: ["Valley", "Culture", "Heritage"],
      slug: "kathmandu-valley"
    },
    {
      title: "Swayambhunath",
      category: "Temple",
      excerpt: "Ancient Buddhist temple complex also known as the Monkey Temple, offering panoramic valley views.",
      readTime: "7 min read",
      tags: ["Buddhist", "Viewpoint", "Monkeys"],
      slug: "swayambhunath"
    }
  ];

  const recentlyUpdated = [
    "Mount Everest - Updated climbing statistics",
    "Pokhara - New adventure activities added", 
    "Chitwan National Park - Wildlife conservation updates",
    "Lumbini - Archaeological discoveries",
    "Manaslu Circuit - New tea house information"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Nepal Travel Wiki
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Your comprehensive guide to Nepal's destinations, monuments, temples, and mountains. 
          Discover detailed information about every place worth visiting in Nepal.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto flex space-x-2">
          <Input 
            placeholder="Search destinations, temples, monuments..." 
            className="flex-1"
          />
          <Button>
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-center text-primary mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">
                  {category.count} Articles
                </Badge>
                <Button variant="outline" className="w-full">
                  Explore {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary cursor-pointer">
                  <Link to={`/wiki/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="p-0" asChild>
                  <Link to={`/wiki/${article.slug}`}>
                    Read More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sidebar Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recently Updated */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Recently Updated</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentlyUpdated.map((item, index) => (
                <li key={index} className="text-sm">
                  <Link to="#" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Popular This Month */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Popular This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Destinations</h4>
                <ul className="text-sm space-y-1">
                  <li><Link to="/wiki/everest-base-camp" className="hover:text-primary">Everest Base Camp</Link></li>
                  <li><Link to="/wiki/annapurna-circuit" className="hover:text-primary">Annapurna Circuit</Link></li>
                  <li><Link to="/wiki/pokhara" className="hover:text-primary">Pokhara</Link></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Temples & Monuments</h4>
                <ul className="text-sm space-y-1">
                  <li><Link to="/wiki/pashupatinath-temple" className="hover:text-primary">Pashupatinath Temple</Link></li>
                  <li><Link to="/wiki/boudhanath-stupa" className="hover:text-primary">Boudhanath Stupa</Link></li>
                  <li><Link to="/wiki/swayambhunath" className="hover:text-primary">Swayambhunath</Link></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wiki;