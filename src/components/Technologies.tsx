const technologies = [
  "ChatGPT",
  "OpenAI",
  "Gemini",
  "Claude",
  "N8N",
  "Make.com",
  "Vapi",
  "DALL-E",
  "Midjourney",
  "Stable Diffusion",
  "ElevenLabs",
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
              key={tech}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
            >
              <span className="font-medium text-primary">{tech}</span>
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