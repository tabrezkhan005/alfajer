"use client";

import { Sparkles, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const valueProps: ValueProp[] = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "No Added Sugar",
    description: "100% natural sweetness",
    accentColor: "#009746",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Natural Ingredients",
    description: "Sourced from nature",
    accentColor: "#009746",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Quality Tested",
    description: "Lab verified premium",
    accentColor: "#009746",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Pan-India Delivery",
    description: "Fast & reliable shipping",
    accentColor: "#AB1F22",
  },
];

export function ValuePropositionStrip() {
  const ref = useFadeInUp<HTMLDivElement>({ stagger: 0.1, duration: 0.8 });

  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {valueProps.map((prop) => (
            <Card
              key={prop.title}
              className="group relative overflow-hidden border-2 border-transparent hover:border-[#AB1F22]/20 bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${prop.accentColor}08 0%, ${prop.accentColor}02 100%)`,
                }}
              />
              <CardContent className="p-8 relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="relative p-4 rounded-2xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${prop.accentColor}15`,
                    }}
                  >
                    <div
                      className="transition-colors duration-500"
                      style={{ color: prop.accentColor }}
                    >
                      {prop.icon}
                    </div>
                    <div
                      className="absolute -top-1 -right-1 h-3 w-3 rounded-full animate-pulse"
                      style={{ backgroundColor: prop.accentColor }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                      {prop.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: prop.accentColor }}
                    >
                      {prop.description}
                    </p>
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
