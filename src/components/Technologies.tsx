import { Button } from "@/components/ui/button";
import { google, telegram, database, slack, discord } from "lucide-react";

const technologies = [
  {
    name: "Google Sheets",
    icon: google,
    description: "Connect and automate your spreadsheet workflows"
  },
  {
    name: "Telegram",
    icon: telegram,
    description: "Build automated messaging and notification systems"
  },
  {
    name: "MySQL",
    icon: database,
    description: "Integrate with your MySQL databases seamlessly"
  },
  {
    name: "Slack",
    icon: slack,
    description: "Automate your team communications and workflows"
  },
  {
    name: "Discord",
    icon: discord,
    description: "Create powerful Discord bot integrations"
  },
  {
    name: "PostgreSQL",
    icon: database,
    description: "Connect and manage your PostgreSQL databases"
  }
];

export const Technologies = () => {
  return (
    <section className="py-20 bg-gray-50" id="technologies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            We connect to all your apps
          </h2>
          <p className="text-xl text-gray-600">
            Seamless integration with thousands of tools through APIs, custom code, and webhooks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
            <Button variant="outline" className="text-primary">
              Many More +
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};