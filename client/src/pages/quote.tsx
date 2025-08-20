import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FrontendQuoteForm from "@/components/forms/frontend-quote-form";
import { 
  Calculator, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  ArrowLeft,
  FileText,
  Settings,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Phone,
  Mail,
  Download,
  Star,
  Award
} from "lucide-react";
import { AnimatedSection, useScrollAnimations, useScrollAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

interface ProjectConfig {
  projectType: string;
  industry: string;
  projectSize: string;
  timeline: string;
  budget: string;
  requirements: string[];
  additionalFeatures: string[];
  complexity: string;
  location: string;
  existingInfrastructure: string;
}

const PROJECT_TYPES = [
  { value: "process-automation", label: "Process Automation", basePrice: 500000, multiplier: 1.0 },
  { value: "power-systems", label: "Power Control Systems", basePrice: 750000, multiplier: 1.2 },
  { value: "instrumentation", label: "Instrumentation & Control", basePrice: 400000, multiplier: 0.8 },
  { value: "solar-solutions", label: "Solar Automation", basePrice: 600000, multiplier: 1.1 },
  { value: "building-automation", label: "Building Automation", basePrice: 350000, multiplier: 0.7 },
  { value: "manufacturing-automation", label: "Manufacturing Automation", basePrice: 800000, multiplier: 1.3 }
];

const INDUSTRIES = [
  { value: "manufacturing", label: "Manufacturing", multiplier: 1.0 },
  { value: "power-generation", label: "Power Generation", multiplier: 1.4 },
  { value: "oil-gas", label: "Oil & Gas", multiplier: 1.6 },
  { value: "chemical", label: "Chemical Processing", multiplier: 1.5 },
  { value: "water-treatment", label: "Water Treatment", multiplier: 1.2 },
  { value: "food-beverage", label: "Food & Beverage", multiplier: 1.1 },
  { value: "pharmaceutical", label: "Pharmaceutical", multiplier: 1.7 },
  { value: "renewable-energy", label: "Renewable Energy", multiplier: 1.3 }
];

const PROJECT_SIZES = [
  { value: "small", label: "Small (1-10 I/O Points)", multiplier: 0.5 },
  { value: "medium", label: "Medium (11-100 I/O Points)", multiplier: 1.0 },
  { value: "large", label: "Large (101-500 I/O Points)", multiplier: 2.0 },
  { value: "enterprise", label: "Enterprise (500+ I/O Points)", multiplier: 4.0 }
];

const TIMELINES = [
  { value: "urgent", label: "Urgent (< 3 months)", multiplier: 1.3 },
  { value: "standard", label: "Standard (3-6 months)", multiplier: 1.0 },
  { value: "extended", label: "Extended (6-12 months)", multiplier: 0.9 },
  { value: "long-term", label: "Long-term (12+ months)", multiplier: 0.8 }
];

const REQUIREMENTS = [
  { id: "plc-programming", label: "PLC Programming", price: 50000 },
  { id: "scada-development", label: "SCADA Development", price: 100000 },
  { id: "hmi-design", label: "HMI Design", price: 75000 },
  { id: "network-integration", label: "Network Integration", price: 60000 },
  { id: "safety-systems", label: "Safety Systems", price: 120000 },
  { id: "remote-monitoring", label: "Remote Monitoring", price: 80000 },
  { id: "data-analytics", label: "Data Analytics", price: 90000 },
  { id: "mobile-app", label: "Mobile App Interface", price: 70000 }
];

const ADDITIONAL_FEATURES = [
  { id: "redundancy", label: "System Redundancy", price: 150000 },
  { id: "cybersecurity", label: "Advanced Cybersecurity", price: 100000 },
  { id: "iot-integration", label: "IoT Integration", price: 85000 },
  { id: "ai-ml", label: "AI/ML Analytics", price: 200000 },
  { id: "predictive-maintenance", label: "Predictive Maintenance", price: 120000 },
  { id: "energy-management", label: "Energy Management", price: 110000 },
  { id: "cloud-integration", label: "Cloud Integration", price: 95000 },
  { id: "training-support", label: "Extended Training & Support", price: 80000 }
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("calculator");
  const [config, setConfig] = useState<ProjectConfig>({
    projectType: "",
    industry: "",
    projectSize: "",
    timeline: "",
    budget: "",
    requirements: [],
    additionalFeatures: [],
    complexity: "",
    location: "",
    existingInfrastructure: ""
  });

  const heroAnimation = useScrollAnimation();

  const benefits = [
    {
      icon: FileText,
      title: "Detailed Assessment",
      description: "Comprehensive project evaluation and technical specifications"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Receive your detailed quote within 24-48 hours"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Free technical consultation with our engineering team"
    },
    {
      icon: Star,
      title: "Customized Solutions",
      description: "Tailored engineering solutions for your specific requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Request",
      description: "Fill out our comprehensive quote form or use our cost calculator"
    },
    {
      step: "02", 
      title: "Technical Review",
      description: "Our engineering team analyzes your requirements and specifications"
    },
    {
      step: "03",
      title: "Site Assessment",
      description: "Optional on-site visit for complex projects (if required)"
    },
    {
      step: "04",
      title: "Detailed Quote",
      description: "Receive comprehensive pricing with timeline and deliverables"
    }
  ];

  const calculateEstimate = () => {
    let basePrice = 0;
    let totalMultiplier = 1;

    // Base price from project type
    const projectType = PROJECT_TYPES.find(pt => pt.value === config.projectType);
    if (projectType) {
      basePrice = projectType.basePrice;
      totalMultiplier *= projectType.multiplier;
    }

    // Industry multiplier
    const industry = INDUSTRIES.find(ind => ind.value === config.industry);
    if (industry) {
      totalMultiplier *= industry.multiplier;
    }

    // Project size multiplier
    const projectSize = PROJECT_SIZES.find(ps => ps.value === config.projectSize);
    if (projectSize) {
      totalMultiplier *= projectSize.multiplier;
    }

    // Timeline multiplier
    const timeline = TIMELINES.find(tl => tl.value === config.timeline);
    if (timeline) {
      totalMultiplier *= timeline.multiplier;
    }

    // Add requirements cost
    const requirementsCost = config.requirements.reduce((sum, reqId) => {
      const requirement = REQUIREMENTS.find(req => req.id === reqId);
      return sum + (requirement?.price || 0);
    }, 0);

    // Add additional features cost
    const featuresCost = config.additionalFeatures.reduce((sum, featureId) => {
      const feature = ADDITIONAL_FEATURES.find(feat => feat.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const totalCost = (basePrice * totalMultiplier) + requirementsCost + featuresCost;
    return {
      basePrice: basePrice * totalMultiplier,
      requirementsCost,
      featuresCost,
      totalCost,
      timeline: timeline?.label || "Not specified"
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleRequirementChange = (requirementId: string, checked: boolean) => {
    if (checked) {
      setConfig(prev => ({
        ...prev,
        requirements: [...prev.requirements, requirementId]
      }));
    } else {
      setConfig(prev => ({
        ...prev,
        requirements: prev.requirements.filter(id => id !== requirementId)
      }));
    }
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setConfig(prev => ({
        ...prev,
        additionalFeatures: [...prev.additionalFeatures, featureId]
      }));
    } else {
      setConfig(prev => ({
        ...prev,
        additionalFeatures: prev.additionalFeatures.filter(id => id !== featureId)
      }));
    }
  };

  const estimate = calculateEstimate();
  const progress = (currentStep / 4) * 100;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Get Quote & Cost Calculator - Powerton Engineering",
    "description": "Request a detailed quote for industrial automation, electrical control panels, and engineering solutions. Use our cost calculator for instant estimates.",
    "url": "https://powertonengineering.in/quote",
    "mainEntity": {
      "@type": "Organization",
      "name": "Powerton Engineering Pvt. Ltd.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-94627-71662",
        "contactType": "sales"
      }
    }
  };

  return (
    <>
      <SEO
        title="Get Quote & Cost Calculator - Industrial Automation Solutions | Powerton Engineering"
        description="Request a detailed quote for process automation, electrical control panels, instrumentation, and custom engineering solutions. Use our interactive cost calculator for instant estimates. Free consultation and competitive pricing."
        keywords="quote request, cost calculator, industrial automation quote, electrical control panel pricing, process automation cost, engineering solutions quote, instrumentation pricing, project cost estimator"
        canonicalUrl="https://powertonengineering.in/quote"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br from-primary to-blue-800 text-white py-16 lg:py-24 ${getAnimationClass('fade-in-up', true)}`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Your Custom <span className="text-secondary">Engineering Quote</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground opacity-90 mb-8 leading-relaxed">
              Professional assessment, competitive pricing, and expert consultation for your industrial automation and electrical engineering projects. Use our cost calculator for instant estimates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">24-48 Hour Response</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Instant Cost Estimates</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">No Hidden Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Quote Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant cost estimates with our calculator or request a detailed custom quote from our engineering team.
            </p>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto mb-8">
              <TabsTrigger value="calculator" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Cost Calculator
              </TabsTrigger>
              <TabsTrigger value="quote" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Request Quote
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-8">
              {/* Project Configuration Steps */}
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Project Cost Calculator
                    </h3>
                    <Badge variant="secondary" className="px-3 py-1">
                      Step {currentStep} of 4
                    </Badge>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Configuration Panel */}
                  <div className="lg:col-span-2">
                    <Card className="bg-card border border-border rounded-lg shadow-sm">
                      <CardHeader className="p-6">
                        <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                          {currentStep === 1 && "Project Type & Industry"}
                          {currentStep === 2 && "Project Specifications"}
                          {currentStep === 3 && "Requirements & Features"}
                          {currentStep === 4 && "Additional Information"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        {/* Step 1: Project Type & Industry */}
                        {currentStep === 1 && (
                          <>
                            <div>
                              <Label htmlFor="projectType" className="text-sm font-medium mb-2 block">Project Type</Label>
                              <Select value={config.projectType} onValueChange={(value) => setConfig(prev => ({ ...prev, projectType: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {PROJECT_TYPES.map(type => (
                                    <SelectItem key={type.value} value={type.value}>
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="industry" className="text-sm font-medium mb-2 block">Industry</Label>
                              <Select value={config.industry} onValueChange={(value) => setConfig(prev => ({ ...prev, industry: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  {INDUSTRIES.map(industry => (
                                    <SelectItem key={industry.value} value={industry.value}>
                                      {industry.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {/* Step 2: Project Specifications */}
                        {currentStep === 2 && (
                          <>
                            <div>
                              <Label htmlFor="projectSize" className="text-sm font-medium mb-2 block">Project Size</Label>
                              <Select value={config.projectSize} onValueChange={(value) => setConfig(prev => ({ ...prev, projectSize: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project size" />
                                </SelectTrigger>
                                <SelectContent>
                                  {PROJECT_SIZES.map(size => (
                                    <SelectItem key={size.value} value={size.value}>
                                      {size.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="timeline" className="text-sm font-medium mb-2 block">Project Timeline</Label>
                              <Select value={config.timeline} onValueChange={(value) => setConfig(prev => ({ ...prev, timeline: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  {TIMELINES.map(timeline => (
                                    <SelectItem key={timeline.value} value={timeline.value}>
                                      {timeline.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {/* Step 3: Requirements & Features */}
                        {currentStep === 3 && (
                          <div className="space-y-6">
                            <div>
                              <Label className="text-sm font-medium mb-4 block">Core Requirements</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {REQUIREMENTS.map(requirement => (
                                  <div key={requirement.id} className="flex items-center space-x-3">
                                    <Checkbox
                                      id={requirement.id}
                                      checked={config.requirements.includes(requirement.id)}
                                      onCheckedChange={(checked) => handleRequirementChange(requirement.id, checked as boolean)}
                                    />
                                    <div>
                                      <Label htmlFor={requirement.id} className="text-sm font-medium cursor-pointer">
                                        {requirement.label}
                                      </Label>
                                      <div className="text-xs text-muted-foreground">
                                        {formatCurrency(requirement.price)}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-4 block">Additional Features</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {ADDITIONAL_FEATURES.map(feature => (
                                  <div key={feature.id} className="flex items-center space-x-3">
                                    <Checkbox
                                      id={feature.id}
                                      checked={config.additionalFeatures.includes(feature.id)}
                                      onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                                    />
                                    <div>
                                      <Label htmlFor={feature.id} className="text-sm font-medium cursor-pointer">
                                        {feature.label}
                                      </Label>
                                      <div className="text-xs text-muted-foreground">
                                        {formatCurrency(feature.price)}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 4: Additional Information */}
                        {currentStep === 4 && (
                          <>
                            <div>
                              <Label htmlFor="location" className="text-sm font-medium mb-2 block">Project Location</Label>
                              <Input
                                id="location"
                                placeholder="City, State"
                                value={config.location}
                                onChange={(e) => setConfig(prev => ({ ...prev, location: e.target.value }))}
                              />
                            </div>

                            <div>
                              <Label htmlFor="existingInfrastructure" className="text-sm font-medium mb-2 block">Existing Infrastructure</Label>
                              <Textarea
                                id="existingInfrastructure"
                                placeholder="Describe any existing systems or infrastructure..."
                                value={config.existingInfrastructure}
                                onChange={(e) => setConfig(prev => ({ ...prev, existingInfrastructure: e.target.value }))}
                                rows={4}
                              />
                            </div>
                          </>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-6 border-t">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            disabled={currentStep === 4 || (currentStep === 1 && (!config.projectType || !config.industry))}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            {currentStep === 4 ? 'Complete' : 'Next'}
                            {currentStep !== 4 && <ArrowRight className="w-4 h-4 ml-2" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cost Estimate Panel */}
                  <div>
                    <Card className="bg-card border border-border rounded-lg shadow-sm sticky top-8">
                      <CardHeader className="p-6">
                        <CardTitle className="text-xl md:text-2xl font-semibold text-foreground flex items-center">
                          <DollarSign className="w-6 h-6 mr-2 text-secondary" />
                          Cost Estimate
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        {config.projectType && config.industry && (
                          <>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Base Project Cost:</span>
                                <span className="font-medium">{formatCurrency(estimate.basePrice)}</span>
                              </div>
                              
                              {estimate.requirementsCost > 0 && (
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Requirements:</span>
                                  <span className="font-medium">{formatCurrency(estimate.requirementsCost)}</span>
                                </div>
                              )}
                              
                              {estimate.featuresCost > 0 && (
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Additional Features:</span>
                                  <span className="font-medium">{formatCurrency(estimate.featuresCost)}</span>
                                </div>
                              )}
                              
                              <div className="border-t pt-3">
                                <div className="flex justify-between items-center">
                                  <span className="font-semibold text-foreground">Total Estimate:</span>
                                  <span className="text-2xl font-bold text-secondary">
                                    {formatCurrency(estimate.totalCost)}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 p-4 bg-muted rounded-lg">
                              <div className="text-sm text-muted-foreground">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4" />
                                  <span>Estimated Timeline: {estimate.timeline}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span>Includes installation & commissioning</span>
                                </div>
                              </div>
                            </div>

                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-6">
                              <Download className="w-4 h-4 mr-2" />
                              Get Detailed Quote
                            </Button>
                          </>
                        )}

                        {(!config.projectType || !config.industry) && (
                          <div className="text-center py-8">
                            <Calculator className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-sm text-muted-foreground">
                              Select project type and industry to see cost estimates
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quote" className="space-y-8">
              {/* Quote Form Section */}
              <div className="max-w-4xl mx-auto">
                <Card className="bg-card border border-border rounded-lg shadow-sm">
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                      Request Custom Quote
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Get a detailed quote tailored to your specific project requirements from our engineering experts.
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <FrontendQuoteForm />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Quote Service?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get accurate pricing and professional consultation for your engineering projects with our comprehensive quote service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm text-center hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Quote Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial request to detailed proposal, we ensure a smooth and transparent process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for your custom engineering solution. Our team is ready to help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setSelectedTab("calculator")}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Try Cost Calculator
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all"
              onClick={() => setSelectedTab("quote")}
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}