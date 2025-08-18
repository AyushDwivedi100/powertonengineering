import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/data/constants";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const headerAnimation = useScrollAnimation();
  const projectsAnimation = useStaggeredAnimation(PROJECTS.length, 200);
  
  const categoryColors = {
    "Power Plant": "bg-red-100 text-red-800",
    "Manufacturing": "bg-blue-100 text-blue-800",
    "Solar": "bg-green-100 text-green-800",
    "Water Treatment": "bg-cyan-100 text-cyan-800"
  };

  return (
    <section id="projects" className="section-padding bg-gray-50" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Our Projects</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Successfully Delivered Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in industrial automation and electrical engineering.
          </p>
        </div>

        <div ref={projectsAnimation.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => {
            const isVisible = projectsAnimation.visibleItems.has(index);
            return (
            <Card 
              key={project.id} 
              className={`overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover ${getAnimationClass('slide-in-scale', isVisible)}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`ID-${String(50 + index).padStart(3, '0')}: ${project.title} - ${project.description}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Badge 
                    className={`mr-4 ${
                      categoryColors[project.category as keyof typeof categoryColors] || 
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm">Completed {project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-foreground/70 mb-6">{project.description}</p>
                
                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      {project.duration}
                    </span>
                  </div>
                  <Link href="/projects">
                    <Button 
                      variant="ghost" 
                      className="text-secondary hover:text-secondary/80 font-semibold"
                    >
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
          })}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button className="btn-primary text-lg px-8 py-4 mr-4">
              View All Projects
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="btn-outline text-lg px-8 py-4"
          >
            Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
