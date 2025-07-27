import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to start your Nepal adventure? Get in touch with our local team and let us help you 
          plan the perfect journey that matches your interests and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Your first name" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Your last name" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Your country" />
                </div>
                <div>
                  <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                  <Input id="travelDates" placeholder="e.g., March 2024" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="groupSize">Group Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Solo Traveler</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3-5">3-5 People</SelectItem>
                      <SelectItem value="6-10">6-10 People</SelectItem>
                      <SelectItem value="10+">10+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range (USD)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="interests">Interests & Activities</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="What interests you most?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cultural">Cultural Tours</SelectItem>
                    <SelectItem value="trekking">Trekking & Hiking</SelectItem>
                    <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                    <SelectItem value="spiritual">Spiritual Journey</SelectItem>
                    <SelectItem value="adventure">Adventure Activities</SelectItem>
                    <SelectItem value="photography">Photography Tours</SelectItem>
                    <SelectItem value="combination">Combination of Activities</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your dream Nepal trip *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe what you'd like to experience in Nepal, any specific places you want to visit, accommodation preferences, or special requirements..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Quick Contact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Request Call Back
              </Button>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    Thamel, Kathmandu<br />
                    Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    +977-XXX-XXXXXXX<br />
                    +977-XXX-XXXXXXX
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    info@ctbtours.com<br />
                    booking@ctbtours.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                We typically respond to inquiries within:
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between">
                  <span>WhatsApp:</span>
                  <span className="font-medium">1-2 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium">24 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Phone:</span>
                  <span className="font-medium">Immediate</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Do you offer custom itineraries?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! We specialize in creating personalized itineraries based on your interests, budget, and travel dates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's included in your packages?</h4>
                <p className="text-sm text-muted-foreground">
                  Our packages typically include accommodation, local transportation, guide services, and entrance fees. Specific inclusions vary by package.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you provide travel insurance?</h4>
                <p className="text-sm text-muted-foreground">
                  We recommend purchasing travel insurance separately. We can provide recommendations for reliable insurance providers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What languages do your guides speak?</h4>
                <p className="text-sm text-muted-foreground">
                  Our guides speak English, Hindi, and Nepali fluently. We can arrange guides for other languages upon request.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is homestay accommodation safe?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We carefully select and regularly visit all our homestay families to ensure safety and quality standards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can you arrange airport transfers?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide airport pickup and drop-off services for all our guests at Tribhuvan International Airport.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;