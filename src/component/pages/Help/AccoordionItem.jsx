import { useState } from "react";
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => setIsOpen(!isOpen);
  
    return (
      <div className="border border-gray-300 rounded-lg">
        <button
          className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 flex justify-between items-center"
          onClick={toggleAccordion}
        >
          <span className="font-medium">{title}</span>
          <svg
            className={`w-5 h-5 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && <div className="px-4 pb-4 text-gray-700">{content}</div>}
      </div>
    );
  };

  export default AccordionItem;