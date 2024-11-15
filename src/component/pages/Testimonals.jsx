import React from 'react';

// Sample reviews data
const reviews = [
  { id: 1, author: 'Emily W.', content: "I've been investing with PineBridge for over two years now, and the results have been very satisfying. Their customer service is prompt, and I appreciate the regular updates on my portfolio's performance." },
  { id: 2, author: 'Rajesh K.', content: "PineBridge offers a wide range of investment options, which is great for diversifying my portfolio. However, I sometimes wish their digital platform was more intuitive and user-friendly." },
  { id: 3, author: 'Marta L.', content: "As someone new to investing, PineBridge's educational resources and financial advisors made the process smooth and easy to understand. I feel more confident in managing my funds now." },
  { id: 4, author: 'Charles T.', content: "Their investment strategy has been consistent and aligned with my financial goals. I particularly appreciate how transparent they are about fees and charges." },
  { id: 5, author: 'Anna P.', content: "My experience with PineBridge has been mixed. While their customer service is commendable, the returns haven't been as strong as I had hoped, especially compared to some other firms I’ve tried." },
  { id: 6, author: 'Michael S.', content: "I switched to PineBridge on a friend's recommendation, and it's been one of the best financial decisions I've made. My portfolio has grown steadily, and I receive comprehensive updates every quarter." },
  { id: 7, author: 'Samuel J.', content: "PineBridge’s approach to sustainable investments is a big plus for me. It's reassuring to know that my investments align with my values while still yielding competitive returns." },
  { id: 8, author: 'Linda C.', content: "While PineBridge has a good reputation, my personal experience was underwhelming. The investment performance was average, and communication from my advisor was inconsistent at times." },
  { id: 9, author: 'Naomi H.', content: "I appreciate the personalized service PineBridge provides. My financial advisor has been proactive in suggesting adjustments based on market trends and my changing needs." },
  { id: 10, author: 'Alex B.', content: "The onboarding process with PineBridge was seamless, and they took the time to understand my risk tolerance. So far, I am satisfied with their performance and level of professionalism." }
];

const Testimonials = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-300 mb-4 pb-4">
          <h4 className="text-lg font-semibold">{review.author}</h4>
          <p className="text-gray-700 mt-2">{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
