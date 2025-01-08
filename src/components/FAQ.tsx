import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Chatbot Services",
    questions: [
      {
        question: "What are AI chatbots, and how can they enhance customer interactions?",
        answer: "AI chatbots are intelligent software applications that use natural language processing to engage with customers in real-time. They enhance customer interactions by providing 24/7 support, instant responses, and consistent service quality while handling multiple conversations simultaneously."
      },
      {
        question: "Can I integrate a chatbot with my existing website or app?",
        answer: "Yes, our chatbots are designed to seamlessly integrate with various platforms including websites, mobile apps, and messaging platforms. We provide custom integration solutions that work with your existing technology stack."
      },
      {
        question: "How do AI chatbots improve customer service?",
        answer: "AI chatbots improve customer service by providing instant responses, handling routine inquiries, collecting customer data, and escalating complex issues to human agents when needed. This results in faster response times, reduced wait times, and improved customer satisfaction."
      }
    ]
  },
  {
    title: "Business Process Automation",
    questions: [
      {
        question: "What is business process automation, and how does it work?",
        answer: "Business process automation uses technology to execute recurring tasks or processes automatically. It works by analyzing your existing workflows, identifying repetitive tasks, and implementing software solutions that can perform these tasks with minimal human intervention."
      },
      {
        question: "What types of tasks can be automated?",
        answer: "Many business tasks can be automated, including data entry, document processing, email responses, scheduling, inventory management, invoice processing, report generation, and social media management. We analyze your specific needs to identify the best automation opportunities."
      },
      {
        question: "Will automation require significant changes to my current processes?",
        answer: "Not necessarily. Our automation solutions are designed to integrate with your existing processes and can be implemented gradually. We work closely with your team to ensure a smooth transition with minimal disruption to your operations."
      }
    ]
  },
  {
    title: "AI-Powered Tools",
    questions: [
      {
        question: "What AI tools are included in your services?",
        answer: "Our services include a comprehensive suite of AI tools such as natural language processing, machine learning algorithms, computer vision, predictive analytics, and automated decision-making systems. The specific tools are customized based on your business needs."
      },
      {
        question: "How do AI tools optimize operations?",
        answer: "AI tools optimize operations by analyzing data patterns, automating complex decisions, predicting trends, identifying inefficiencies, and providing actionable insights. This leads to improved accuracy, faster processing times, and better resource allocation."
      },
      {
        question: "Are the AI-powered tools customizable?",
        answer: "Yes, all our AI tools are highly customizable to meet your specific business requirements. We work with you to understand your needs and configure the tools accordingly, ensuring they align perfectly with your business objectives and workflows."
      }
    ]
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};