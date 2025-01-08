import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingBag, Database, User, Search, Mail } from "lucide-react";

const caseStudies = [
  {
    title: "News Tweet Generator",
    description: "Automated social media content creation from news articles using AI",
    icon: MessageSquare,
    image: "/lovable-uploads/5d958326-1256-4a2a-ae71-155d971f3a36.png",
    comingSoon: false
  },
  {
    title: "SmartStore Builder",
    description: "AI-powered e-commerce store setup and management automation",
    icon: ShoppingBag,
    comingSoon: false
  },
  {
    title: "HubSpot Sync",
    description: "Seamless data synchronization between HubSpot and your tools",
    icon: Database,
    comingSoon: false
  },
  {
    title: "AI Engagement Agent",
    description: "Automated customer engagement with AI-powered responses",
    icon: User,
    comingSoon: false
  },
  {
    title: "SEO Optimizer",
    description: "AI-driven SEO optimization and content enhancement",
    icon: Search,
    comingSoon: true
  },
  {
    title: "Smart Newsletter",
    description: "Automated newsletter creation and optimization",
    icon: Mail,
    comingSoon: true
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Real-world solutions that save time and boost efficiency
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  {study.image && (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  {study.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-xl text-primary">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button
                    variant="link"
                    className="text-blue-500 hover:text-blue-600 p-0"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};