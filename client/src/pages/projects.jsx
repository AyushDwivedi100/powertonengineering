import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/data/constants";
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Download,
  Users,
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectCategories = [
    { id: "all", name: "All Projects", count: PROJECTS.length },
    { id: "Power Plant", name: "Power Generation", count: 1 },
    { id: "Manufacturing", name: "Manufacturing", count: 1 },
    { id: "Solar", name: "Solar Energy", count: 1 },
    { id: "Water Treatment", name: "Water Treatment", count: 1 }
  ];

  const categoryColors = {
    "Power Plant": "bg-red-100 text-red-800",
    "Manufacturing": "bg-blue-100 text-blue-800",
    "Solar": "bg-green-100 text-green-800",
    "Water Treatment": "bg-cyan-100 text-cyan-800"
  };

  const filteredProjects = selectedCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "1200+", label: "Projects Completed", icon: Award },
    { number: "450+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "98%", label: "Success Rate", icon: Target }
  ];

  return (
    <>
      <SEO
        title="Engineering Projects Portfolio - Industrial Automation Cases | Powerton Engineering"
        description="Explore our portfolio of successfully completed engineering projects including power plants, manufacturing automation, solar installations, and water treatment systems across India."
        keywords="engineering projects, automation projects, power plant automation, manufacturing automation, solar projects, water treatment automation, industrial projects India"
        canonicalUrl="https://powertonengineering.in/projects"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-responsive-2xl font-bold mb-4 sm:mb-6">
              Our <span className="text-secondary">Project Portfolio</span>
            </h1>
            <p className="text-responsive-base mb-6 sm:mb-8 opacity-90">
              Explore our portfolio of successfully completed engineering projects showcasing our expertise in industrial automation and electrical engineering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="btn-secondary mobile-full btn-responsive">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Portfolio
              </Button>
              <Link href="/contact" className="mobile-full">
                <Button 
                  variant="outline" 
                  className="btn-outline mobile-full btn-responsive border-white text-white hover:bg-white hover:text-primary"
                >
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Categories and Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Featured Projects by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From power generation to water treatment, explore how we've delivered innovative engineering solutions across various industries.
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 gap-2 bg-white p-2 rounded-lg mb-8 shadow-sm">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                  <Badge variant="outline" className="ml-2">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} - ${project.description}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <Badge 
                          className={`${
                            categoryColors[project.category as keyof typeof categoryColors] || 
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-gray-900">
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {project.duration}
                        </div>
                      </div>

                      {/* Project Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          <span>Successfully Completed</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="text-secondary hover:text-secondary/80 font-semibold"
                        >
                          View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Detailed Case Study Section */}
      {selectedCategory !== "all" && filteredProjects.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            {filteredProjects.map((project) => (
              <div key={`details-${project.id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge 
                    className={`mb-4 ${
                      categoryColors[project.category as keyof typeof categoryColors] || 
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.category} Project
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Project Scope</h3>
                      <div className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-primary mr-3" />
                          <span className="text-gray-600 text-sm">Location: {project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-primary mr-3" />
                          <span className="text-gray-600 text-sm">Duration: {project.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-primary mr-3" />
                          <span className="text-gray-600 text-sm">Completed: {project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="btn-primary">
                      Discuss Similar Project
                    </Button>
                  </Link>
                </div>

                <div>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Project Impact</h3>
                      
                      <div className="space-y-6">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">Energy Efficiency</h4>
                          <p className="text-green-700 text-sm">
                            Achieved 25-30% improvement in energy efficiency through advanced automation systems.
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Operational Excellence</h4>
                          <p className="text-blue-700 text-sm">
                            Reduced manual intervention by 70% and improved process reliability significantly.
                          </p>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-800 mb-2">Safety Enhancement</h4>
                          <p className="text-orange-700 text-sm">
                            Implemented comprehensive safety systems ensuring zero incidents post-commissioning.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 w-4 h-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Client Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              What Our Clients Say About Our Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">AA</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The solar installation project was executed flawlessly. The team's professionalism and technical expertise exceeded our expectations."
                </p>
                <div className="font-semibold text-gray-900">Anand Awasthi</div>
                <div className="text-sm text-gray-600">West Bengal</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">SP</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Excellent project management and on-time delivery. The automation system has significantly improved our manufacturing efficiency."
                </p>
                <div className="font-semibold text-gray-900">Sanjay Patil</div>
                <div className="text-sm text-gray-600">Uttar Pradesh</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding technical support throughout the project lifecycle. The instrumentation system works perfectly as designed."
                </p>
                <div className="font-semibold text-gray-900">Rhea Sharma</div>
                <div className="text-sm text-gray-600">Maharashtra</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a customized solution that delivers exceptional results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button className="btn-secondary text-lg px-8 py-4">
                Start Project Discussion
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Project Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
