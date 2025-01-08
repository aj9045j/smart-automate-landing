import { Bot, Brain, Cpu, MessageSquare, Workflow, Sparkles, Code2, Image, Palette, PenTool, Mic } from "lucide-react";

const technologies = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
  },
  {
    name: "OpenAI",
    icon: Brain,
  },
  {
    name: "Gemini",
    icon: Sparkles,
  },
  {
    name: "Claude",
    icon: Bot,
  },
  {
    name: "N8N",
    icon: Workflow,
  },
  {
    name: "Make.com",
    icon: Cpu,
  },
  {
    name: "Vapi",
    icon: Code2,
  },
  {
    name: "DALL-E",
    icon: Image,
  },
  {
    name: "Midjourney",
    icon: Palette,
  },
  {
    name: "Stable Diffusion",
    icon: PenTool,
  },
  {
    name: "ElevenLabs",
    icon: Mic,
  },
];

export const Technologies = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            AI and Automation Technologies
          </h2>
          <p className="text-xl text-gray-600">
            Leveraging cutting-edge tools to power your business
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-2"
            >
              <tech.icon className="w-6 h-6 text-primary" />
              <span className="font-medium text-primary text-sm">{tech.name}</span>
            </div>
          ))}
          <div className="p-4 bg-primary-light text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center cursor-pointer">
            <span className="font-medium">Many More +</span>
          </div>
        </div>
      </div>
    </section>
  );
};