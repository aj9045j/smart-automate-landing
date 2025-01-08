import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SmartBotics</h3>
            <p className="text-gray-300">
              Your trusted partner in AI automation solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:hello@smartbotics.com"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@smartbotics.com
              </a>
              <a
                href="tel:+919819263629"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 (981) 926-3629
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#approach" className="text-gray-300 hover:text-white">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#automations" className="text-gray-300 hover:text-white">
                  Our Automations
                </a>
              </li>
              <li>
                <a href="#login" className="text-gray-300 hover:text-white">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © 2024 SmartBotics Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};