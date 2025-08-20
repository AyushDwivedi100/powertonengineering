import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/data/constants";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ProjectsSection() {
  const categoryColors = {
    "Power Plant": "bg-secondary/10 text-secondary",
    "Manufacturing": "bg-primary/10 text-primary",
    "Solar": "bg-secondary/10 text-secondary",
    "Water Treatment": "bg-primary/10 text-primary"
  };

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted" role="main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Our Projects</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Successfully Delivered Engineering Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in industrial automation and electrical engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROJECTS.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`ID-050: ${project.title} - ${project.description}`}
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <Badge 
                    className={`mr-4 ${
                      categoryColors[project.category as keyof typeof categoryColors] || 
                      "bg-muted text-foreground"
                    }`}
                  >
                    {project.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm">Completed {project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
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
                
                <div className="flex items-center justify-between mt-auto">
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
                  <Link href="/projects" className="group/button">
                    <Button 
                      variant="ghost" 
                      className="text-secondary hover:text-secondary hover:bg-transparent font-semibold transition-all duration-300"
                    >
                      View Details 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/button:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button className="btn-primary text-lg px-8 py-4 mr-4">
              View All Projects
            </Button>
          </Link>
          <a href="/portfolio-download">
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4"
            >
              Download Portfolio
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
