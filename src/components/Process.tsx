import { Check } from "lucide-react";

const steps = [
  {
    title: "Gaining Insight into Your Business Operations",
    description:
      "We map out your processes to reveal how each part connects, creating a clear foundation for AI enhancements.",
  },
  {
    title: "Identifying AI & Automation Opportunities",
    description:
      "We'll audit your workflows to find where AI and automation can boost your efficiency and ROI the most.",
  },
  {
    title: "Custom Build & Testing",
    description:
      "We'll use custom code, AI tools, and your tech stack to build and thoroughly test automation solutions tailored to your needs.",
  },
  {
    title: "Ongoing Management and Iteration",
    description:
      "As your business grows, we'll keep your automation systems updated and scalable to match your evolving needs.",
  },
];

export const Process = () => {
  return (
    <section className="py-20 bg-white" id="approach">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            How We Automate Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By combining AI and automation, we design smart, interconnected systems
            that replace repetitive tasks with seamless workflows. The result? More
            team capacity, faster results, and a top-tier customer experience — all
            custom-built for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary-light transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-gray-500">Step {index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};