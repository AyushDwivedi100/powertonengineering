import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS, CLIENTS } from "@/data/constants";
import { Star } from "lucide-react";

export default function ClientsSection() {
  return (
    <section className="section-padding bg-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Our Clients</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Trusted By Leading Brands and Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with industry leaders across various sectors to deliver exceptional engineering solutions.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-300 mb-16">
          {CLIENTS.map((client, index) => (
            <div 
              key={client} 
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 min-h-[80px] border border-gray-100"
            >
              <span className="text-gray-700 font-semibold text-sm text-center leading-tight">{client}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name} className="bg-gray-50 border border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold mr-4 shadow-md">
                    <span>{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
