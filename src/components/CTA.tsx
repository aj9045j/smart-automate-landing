import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to automate your business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch for a free consultation and see how we can help you save
          time and money.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
        >
          Book a Free Strategy Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};