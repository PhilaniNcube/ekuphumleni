import React from 'react';
import Container from '@/components/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Sprout, Heart, HandHeart, FileText, UserCheck, Circle, Handshake } from 'lucide-react';

const Mission = () => {
  const coreValues = [
    {
      title: "Community Empowerment",
      description: "Fostering self-sufficiency through skills development and gardening projects.",
      icon: Sprout,
    },
    {
      title: "Youth Development",
      description: "Engaging youth in positive activities like sports and music, and providing early childhood education.",
      icon: Users,
    },
    {
      title: "Health & Wellness",
      description: "Addressing critical health challenges and ensuring access to nutritious meals.",
      icon: Heart,
    },
    {
      title: "Social Support",
      description: "Offering care for the elderly, aftercare for children, and a safe environment for learning and growth.",
      icon: HandHeart,
    },
  ];

  const highlights = [
    {
      title: "NPO 184-776",
      description: "Officially registered and committed to transparency.",
      icon: FileText,
    },
    {
      title: "90% Women-Led",
      description: "Empowering women to drive community change.",
      icon: UserCheck,
    },
    {
      title: "Holistic Support",
      description: "From vegetable gardens to skill development and child care.",
      icon: Circle,
    },
    {
      title: "Partnerships",
      description: "Collaborating with local government, SAPS, and various NGOs to maximize impact.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Ekuphumleni Joe Slovo Community Projects, an organization deeply committed to uplifting our community in Despatch, Ward 41. Born from a vision to combat unemployment, poverty, crime, and social ills, we are a beacon of hope and progress. Primarily led by women, our initiatives span from nourishing our community with fresh produce to empowering youth and caring for the vulnerable.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values & Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-brand-cream border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Impact & Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-brand-cream border-none h-full">
                <CardHeader>
                   <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                   </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
