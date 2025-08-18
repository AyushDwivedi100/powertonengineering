import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Globe, Target, Eye, Heart } from "lucide-react";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/data/constants";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

export default function About() {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const valuesAnimation = useStaggeredAnimation(4);
  const certsAnimation = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We are committed to delivering the highest quality products and services that exceed industry standards."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We work closely to understand and exceed their expectations."
    },
    {
      icon: Award,
      title: "Technical Innovation",
      description: "We continuously invest in latest technologies and innovative solutions to stay ahead of industry trends."
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "Our proven track record of on-time delivery and dependable service makes us a trusted partner."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001 Occupational Health & Safety",
    "CE Marking Compliance",
    "UL Listed Products",
    "CPRI Approved Equipment"
  ];

  const teamStats = [
    { number: "50+", label: "Expert Engineers" },
    { number: "25+", label: "Technical Staff" },
    { number: "15+", label: "Years Average Experience" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <>
      <SEO
        title="About Powerton Engineering - Leading Industrial Automation & Electrical Solutions Company | 15+ Years Excellence"
        description="Discover Powerton Engineering's expertise in industrial automation, electrical control panels, and instrumentation solutions. ISO certified company with 15+ years serving 450+ clients across India. Expert engineering team with 24/7 support and pan-India service network."
        keywords="about powerton engineering, industrial automation company India, electrical control panel manufacturer, instrumentation services company, automation experts Noida, electrical engineering company, process automation specialists, control system integrators, ISO certified manufacturer"
        canonicalUrl="https://powertonengineering.in/about"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={heroAnimation.ref} className={`max-w-4xl mx-auto text-center ${getAnimationClass('fade-in-up', heroAnimation.isVisible)}`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-secondary">Powerton Engineering</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Your trusted partner in delivering high-quality engineering solutions and services for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={storyAnimation.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={getAnimationClass('fade-in-left', storyAnimation.isVisible)}>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="ID-004: Powerton Engineering industrial automation facility with modern control systems" 
                className="rounded-xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
            <div className={getAnimationClass('fade-in-right', storyAnimation.isVisible)}>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Our Journey & Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to empower industries through innovation and excellence, Powerton Engineering has grown to become a leading provider of electrical and instrumentation solutions across India.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our headquarters in Noida, we serve clients nationwide with comprehensive engineering solutions including process automation, instrumentation, solar installations, and maintenance services.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {teamStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={missionAnimation.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className={`border-none shadow-lg ${getAnimationClass('fade-in-up', missionAnimation.isVisible)}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower industries with innovative engineering solutions that enhance productivity, efficiency, and sustainability. We strive to be the preferred partner for businesses seeking reliable automation and electrical systems.
                </p>
              </CardContent>
            </Card>

            <Card className={`border-none shadow-lg ${getAnimationClass('fade-in-up', missionAnimation.isVisible, 200)}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's leading engineering solutions provider, recognized for technical excellence, innovation, and customer satisfaction. We envision a future where our solutions drive industrial transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              These values guide our decisions, shape our culture, and drive our commitment to excellence.
            </p>
          </div>

          <div ref={valuesAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isVisible = valuesAnimation.visibleItems.has(index);
              return (
                <Card key={value.title} className={`text-center border-none shadow-lg hover:shadow-xl transition-shadow ${getAnimationClass('bounce-in-up', isVisible)}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Certifications & Quality Standards
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our commitment to quality is validated by industry-recognized certifications and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center p-4 bg-background border border-border rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Partner with Powerton Engineering
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to transform your industrial operations with our expert engineering solutions? 
            Let's discuss your project requirements and deliver excellence together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button className="btn-secondary text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
