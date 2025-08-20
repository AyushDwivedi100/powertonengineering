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
  Download
} from "lucide-react";
import { useScrollAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

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

export default function Configurator() {
  const [currentStep, setCurrentStep] = useState(1);
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

    // Add requirements costs
    const requirementsCost = config.requirements.reduce((total, reqId) => {
      const req = REQUIREMENTS.find(r => r.id === reqId);
      return total + (req ? req.price : 0);
    }, 0);

    // Add additional features costs
    const featuresCost = config.additionalFeatures.reduce((total, featId) => {
      const feat = ADDITIONAL_FEATURES.find(f => f.id === featId);
      return total + (feat ? feat.price : 0);
    }, 0);

    const totalEstimate = (basePrice * totalMultiplier) + requirementsCost + featuresCost;
    
    return {
      basePrice: basePrice * totalMultiplier,
      requirementsCost,
      featuresCost,
      totalEstimate
    };
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const estimate = calculateEstimate();
  const progress = (currentStep / 4) * 100;

  return (
    <>
      <SEO
        title="Project Cost Configurator - Powerton Engineering | Get Instant Automation Estimates"
        description="Configure your industrial automation project and get instant cost estimates. Interactive tool for process automation, power systems, instrumentation, and solar solutions with detailed pricing."
        keywords="automation cost calculator, project estimate tool, industrial automation pricing, PLC cost calculator, SCADA pricing estimate, automation project configurator, engineering cost estimation"
        canonicalUrl="https://powertonengineering.in/configurator"
      />

      {/* Hero Section */}
      <section className={`py-12 md:py-16 lg:py-20 hero-gradient text-white ${getAnimationClass('fade-in-up', heroAnimation.isVisible)}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="hero-content">
            <h1 className="hero-title">
              Project <span className="text-secondary">Configurator</span>
            </h1>
            <p className="hero-subtitle">
              Get instant estimates for your automation project with our intelligent configurator
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calculator className="w-6 h-6" />
              <span>Smart Cost Estimation</span>
              <CheckCircle className="w-6 h-6 ml-4" />
              <span>Instant Results</span>
              <FileText className="w-6 h-6 ml-4" />
              <span>Detailed Breakdown</span>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Step {currentStep} of 4</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Project Type</span>
                <span>Requirements</span>
                <span>Details</span>
                <span>Estimate</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Configuration Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Configure Your Project
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Step 1: Project Type & Industry */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Project Type & Industry</h3>
                        
                        <div>
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select value={config.projectType} onValueChange={(value) => setConfig({...config, projectType: value})}>
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
                          <Label htmlFor="industry">Industry *</Label>
                          <Select value={config.industry} onValueChange={(value) => setConfig({...config, industry: value})}>
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

                        <div>
                          <Label htmlFor="projectSize">Project Size *</Label>
                          <Select value={config.projectSize} onValueChange={(value) => setConfig({...config, projectSize: value})}>
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
                          <Label htmlFor="timeline">Timeline *</Label>
                          <Select value={config.timeline} onValueChange={(value) => setConfig({...config, timeline: value})}>
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
                      </div>
                    )}

                    {/* Step 2: Core Requirements */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Core Requirements</h3>
                        <p className="text-muted-foreground">Select the core functionalities you need:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {REQUIREMENTS.map(req => (
                            <div key={req.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted">
                              <Checkbox
                                id={req.id}
                                checked={config.requirements.includes(req.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setConfig({...config, requirements: [...config.requirements, req.id]});
                                  } else {
                                    setConfig({...config, requirements: config.requirements.filter(r => r !== req.id)});
                                  }
                                }}
                              />
                              <Label htmlFor={req.id} className="flex-1 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <span>{req.label}</span>
                                  <span className="text-sm text-muted-foreground">₹{req.price.toLocaleString()}</span>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Additional Features */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Additional Features</h3>
                        <p className="text-muted-foreground">Enhance your system with advanced features:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ADDITIONAL_FEATURES.map(feat => (
                            <div key={feat.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted">
                              <Checkbox
                                id={feat.id}
                                checked={config.additionalFeatures.includes(feat.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setConfig({...config, additionalFeatures: [...config.additionalFeatures, feat.id]});
                                  } else {
                                    setConfig({...config, additionalFeatures: config.additionalFeatures.filter(f => f !== feat.id)});
                                  }
                                }}
                              />
                              <Label htmlFor={feat.id} className="flex-1 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <span>{feat.label}</span>
                                  <span className="text-sm text-muted-foreground">₹{feat.price.toLocaleString()}</span>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>

                        <div>
                          <Label htmlFor="location">Project Location</Label>
                          <Input
                            id="location"
                            value={config.location}
                            onChange={(e) => setConfig({...config, location: e.target.value})}
                            placeholder="City, State"
                          />
                        </div>

                        <div>
                          <Label htmlFor="infrastructure">Existing Infrastructure</Label>
                          <Textarea
                            id="infrastructure"
                            value={config.existingInfrastructure}
                            onChange={(e) => setConfig({...config, existingInfrastructure: e.target.value})}
                            placeholder="Describe any existing automation systems or infrastructure..."
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Estimate */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Project Summary</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-3">Project Details</h4>
                            <div className="space-y-2 text-sm">
                              <div><strong>Type:</strong> {PROJECT_TYPES.find(pt => pt.value === config.projectType)?.label}</div>
                              <div><strong>Industry:</strong> {INDUSTRIES.find(ind => ind.value === config.industry)?.label}</div>
                              <div><strong>Size:</strong> {PROJECT_SIZES.find(ps => ps.value === config.projectSize)?.label}</div>
                              <div><strong>Timeline:</strong> {TIMELINES.find(tl => tl.value === config.timeline)?.label}</div>
                              {config.location && <div><strong>Location:</strong> {config.location}</div>}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-3">Selected Features</h4>
                            <div className="space-y-1 text-sm">
                              {config.requirements.map(reqId => {
                                const req = REQUIREMENTS.find(r => r.id === reqId);
                                return req ? <div key={reqId}>• {req.label}</div> : null;
                              })}
                              {config.additionalFeatures.map(featId => {
                                const feat = ADDITIONAL_FEATURES.find(f => f.id === featId);
                                return feat ? <div key={featId}>• {feat.label}</div> : null;
                              })}
                            </div>
                          </div>
                        </div>

                        {config.existingInfrastructure && (
                          <div>
                            <h4 className="font-medium mb-2">Existing Infrastructure</h4>
                            <p className="text-sm text-muted-foreground p-3 bg-muted rounded">{config.existingInfrastructure}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </Button>
                      
                      {currentStep < 4 ? (
                        <Button
                          onClick={nextStep}
                          disabled={
                            (currentStep === 1 && (!config.projectType || !config.industry || !config.projectSize || !config.timeline))
                          }
                          className="flex items-center gap-2"
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download Quote
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Estimate Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Cost Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {config.projectType && (
                      <>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Base Project Cost:</span>
                            <span>₹{estimate.basePrice.toLocaleString()}</span>
                          </div>
                          
                          {estimate.requirementsCost > 0 && (
                            <div className="flex justify-between text-sm">
                              <span>Core Features:</span>
                              <span>₹{estimate.requirementsCost.toLocaleString()}</span>
                            </div>
                          )}
                          
                          {estimate.featuresCost > 0 && (
                            <div className="flex justify-between text-sm">
                              <span>Additional Features:</span>
                              <span>₹{estimate.featuresCost.toLocaleString()}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="border-t pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total Estimate:</span>
                            <span className="text-primary">₹{estimate.totalEstimate.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            *Preliminary estimate. Final pricing may vary based on detailed requirements.
                          </p>
                        </div>

                        {currentStep === 4 && (
                          <div className="space-y-3 pt-4 border-t">
                            <div className="flex items-center gap-2 text-sm text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span>Includes project management</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-green-600">
                              <Shield className="w-4 h-4" />
                              <span>1-year warranty included</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-green-600">
                              <Users className="w-4 h-4" />
                              <span>Training & documentation</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {!config.projectType && (
                      <div className="text-center text-muted-foreground py-8">
                        <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Select project details to see cost estimate</p>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-medium">Next Steps:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>Call: +91-94627-71662</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>Email: info@powertonengineering.in</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-3">
                          Schedule Consultation
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}