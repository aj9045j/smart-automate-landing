import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-float">
            Your AI Automation Partner
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our cutting-edge automation integrates AI-driven efficiency into your systems,
            eliminating manual tasks and boosting output, quality, and team performance.
            Fully bespoke and Done-for-You.
          </p>
          <Button
            size="lg"
            className="bg-primary-light hover:bg-primary-light/90 text-white px-8 py-6 text-lg"
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};