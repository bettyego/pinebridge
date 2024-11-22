import AccordionItem from "./AccoordionItem";
const Accordion = () => {
    const items = [
      {
        title: "How can I open an account with PineBridge?",
        content:
          "To open an account, visit our official website and navigate to the 'Get Started' section. Alternatively, you can contact our customer service team for guidance.",
      },
      {
        title: "What is PineBridge's approach to responsible investing?",
        content:
          "PineBridge integrates Environmental, Social, and Governance (ESG) factors into its investment processes, aiming to create sustainable long-term value for investors.",
      },
      {
        title: "How can I access my portfolio information?",
        content:
          "You can access your portfolio details by logging into the PineBridge client portal. If you haven’t registered yet, contact our support team for assistance.",
      },
    ];
  
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Help Page</h1>
        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    );
  };

  export default Accordion;