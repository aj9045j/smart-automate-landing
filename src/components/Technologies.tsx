import { Bot, Brain, Cpu, MessageSquare, Workflow, Sparkles, Code2, Image, Palette, PenTool, Mic, Plus } from "lucide-react";

const technologies = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
    description: "Advanced language model for natural conversations",
  },
  {
    name: "OpenAI",
    icon: Brain,
    description: "Leading AI research and deployment platform",
  },
  {
    name: "Gemini",
    icon: Sparkles,
    description: "Google's advanced multimodal AI model",
  },
  {
    name: "Claude",
    icon: Bot,
    description: "Anthropic's AI assistant for complex tasks",
  },
  {
    name: "N8N",
    icon: Workflow,
    description: "Powerful workflow automation platform",
  },
  {
    name: "Make.com",
    icon: Cpu,
    description: "Visual automation platform",
  },
  {
    name: "Vapi",
    icon: Code2,
    description: "Voice API integration platform",
  },
  {
    name: "DALL-E",
    icon: Image,
    description: "AI image generation by OpenAI",
  },
  {
    name: "Midjourney",
    icon: Palette,
    description: "Advanced AI art generation",
  },
  {
    name: "Stable Diffusion",
    icon: PenTool,
    description: "Open-source image generation model",
  },
  {
    name: "ElevenLabs",
    icon: Mic,
    description: "AI voice synthesis platform",
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
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-3"
            >
              <tech.icon className="w-8 h-8 text-primary" />
              <span className="font-medium text-primary text-sm text-center">{tech.name}</span>
              <span className="text-xs text-gray-500 text-center">{tech.description}</span>
            </div>
          ))}
          <div className="p-6 bg-primary-light text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer">
            <Plus className="w-8 h-8" />
            <span className="font-medium text-sm">Many More</span>
          </div>
        </div>
      </div>
    </section>
  );
};