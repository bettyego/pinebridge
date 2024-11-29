import React from 'react';
import Header from '../../Company/Header/Header';
import Footer from '../../Company/Footer/Footer';

// Sample reviews data with added image URLs
const reviews = [
  { 
    id: 1, 
    author: 'Emily W.', 
    content: "I've been investing with PineBridge for over two years now, and the results have been very satisfying. Their customer service is prompt, and I appreciate the regular updates on my portfolio's performance.",
    image: '/pexels-pixabay-415829.jpg' 
  },
  { 
    id: 2, 
    author: 'Rajesh K.', 
    content: "PineBridge offers a wide range of investment options, which is great for diversifying my portfolio. However, I sometimes wish their digital platform was more intuitive and user-friendly.",
    image: '/pexels-italo-melo-881954-2379005.jpg' 
  },
  // Add images for other reviews as needed
  { 
    id: 4, 
    author: 'Charles T.', 
    content: "Their investment strategy has been consistent and aligned with my financial goals. I particularly appreciate how transparent they are about fees and charges.",
    image: '/pexels-spencphoto-27894410.jpg' 
  },
  { 
    id: 5, 
    author: 'Anna P.', 
    content: "My experience with PineBridge has been mixed. While their customer service is commendable, the returns haven't been as strong as I had hoped, especially compared to some other firms I’ve tried.",
    image: '/pexels-kevinbidwell-2380795.jpg' 
  },
  { 
    id: 6, 
    author: 'Michael S.', 
    content: "I switched to PineBridge on a friend's recommendation, and it's been one of the best financial decisions I've made. My portfolio has grown steadily, and I receive comprehensive updates every quarter.",
    image: '/pexels-chloekalaartist-1043473.jpg' 
  },
  { 
    id: 7, 
    author: 'Samuel J.', 
    content: "PineBridge’s approach to sustainable investments is a big plus for me. It's reassuring to know that my investments align with my values while still yielding competitive returns.",
    image: '/pexels-ganinph-7760780.jpg' 
  },
  { 
    id: 8, 
    author: 'Linda C.', 
    content: "While PineBridge has a good reputation, my personal experience was underwhelming. The investment performance was average, and communication from my advisor was inconsistent at times.",
    image: '/pexels-vinicius-wiesehofer-289347-1130626.jpg' 
  },
  { 
    id: 9, 
    author: 'Naomi H.', 
    content: "I appreciate the personalized service PineBridge provides. My financial advisor has been proactive in suggesting adjustments based on market trends and my changing needs.",
    image: '/pexels-anastasia-shuraeva-5704852.jpg' 
  },
  { 
    id: 10, 
    author: 'Alex B.', 
    content: "The onboarding process with PineBridge was seamless, and they took the time to understand my risk tolerance. So far, I am satisfied with their performance and level of professionalism.",
    image: '/pexels-heitorverdifotos-2169434.jpg' 
  },
  { 
    id: 11, 
    author: 'Sofia M.', 
    content: "PineBridge's real-time portfolio tracking is a game-changer. It gives me confidence knowing exactly where my investments stand at any moment.",
    image: '/pexels-tarzine-jackson-254126-773371.jpg' 
  },
  { 
    id: 12, 
    author: 'Ethan D.', 
    content: "Their customer support team is friendly and knowledgeable, but there were delays during the onboarding process. Overall, a satisfactory experience.",
    image: '/pexels-tkirkgoz-11535818.jpg' 
  },
  { 
    id: 13, 
    author: 'Peter F.', 
    content: "I value PineBridge's focus on ethical investments. Their transparency about which industries they invest in aligns with my personal principles.",
    image: '/pexels-mastercowley-1300402.jpg' 
  },
  { 
    id: 14, 
    author: 'Jordan P.', 
    content: "Their financial tools and calculators make planning for the future so much easier. The clarity they provide is unlike any other service I've used.",
    image: '/pexels-dimkidama-16406346.jpg' 
  },
  { 
    id: 15, 
    author: 'Olivia R.', 
    content: "PineBridge's educational webinars helped me navigate the complexities of investing. Highly recommend them for first-time investors.",
    image: '/pexels-marcelodias-2104252.jpg' 
  }
];

const Testimonials = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center border border-gray-200"
            >
              <img 
              
                src={review.image} 
                alt={`${review.author}'s profile`} 
                className="w-17 h-17 rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold">{review.author}</h4>
              <p className="text-gray-700 mt-2">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
