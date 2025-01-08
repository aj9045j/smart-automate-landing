import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-primary">
              SmartBotics
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#approach" className="text-gray-600 hover:text-primary">
                Our Approach
              </a>
              <a href="#automations" className="text-gray-600 hover:text-primary">
                Our Automations
              </a>
              <a href="#login" className="text-gray-600 hover:text-primary">
                Login
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
              Book a Free Strategy Call
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};