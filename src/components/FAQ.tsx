import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes across various industries. Our automation solutions are particularly valuable for companies with repetitive tasks, data processing needs, or customer service operations that could benefit from AI enhancement."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation time varies based on the complexity of your automation needs. Simple automations can be implemented within 1-2 weeks, while more complex systems might take 4-8 weeks. We'll provide a detailed timeline during your strategy call."
  },
  {
    question: "What's included in the free strategy call?",
    answer: "During the free strategy call, we'll discuss your current business processes, identify automation opportunities, and outline potential solutions. You'll receive a high-level roadmap and estimated ROI for implementing our recommended automations."
  },
  {
    question: "How do you ensure security and privacy?",
    answer: "We implement industry-standard security protocols and follow best practices for data protection. All data is encrypted, and we sign comprehensive NDAs. We also provide detailed documentation of our security measures."
  },
  {
    question: "What's your pricing structure?",
    answer: "Our pricing is based on the complexity and scope of your automation needs. We offer flexible packages starting from basic automation setups to comprehensive enterprise solutions. We'll provide detailed pricing during your strategy call."
  },
  {
    question: "How do you handle maintenance and updates?",
    answer: "We provide ongoing maintenance and regular updates as part of our service. This includes monitoring system performance, implementing improvements, and adapting to changes in your business processes or integrated technologies."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI automation services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};