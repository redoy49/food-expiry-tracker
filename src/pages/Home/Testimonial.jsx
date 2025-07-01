import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const people = [
    {
      name: "Sumaiya Afrin",
      time: "3 days ago",
      rating: "4.8",
      image:
        "https://i.ibb.co/LXqPK69K/Screenshot-2025-04-22-190539.png",
      message:
        "This website has made food management so much easier. I can now track expiry dates and avoid waste effortlessly.",
    },
    {
      name: "Robert Bruce",
      time: "1 week ago",
      rating: "5.0",
      image: "https://i.ibb.co/m5v2R0Kb/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg",
      message:
        "I love using this site on both my laptop and phone. It's responsive, easy to use, and actually helps me save groceries.",
    },
    {
      name: "Redoy Al Hasan",
      time: "5 days ago",
      rating: "4.0",
      image: "https://i.ibb.co/DgKtFb3h/stock-photo-doctor-white-coat-glasses-holding-clipboard-looking-camera-isolated-blue.webp",
      message:
        "A must-have tool for anyone serious about reducing food waste. The reminders are timely and effective!",
    },
    {
      name: "Emily Akter",
      time: "2 weeks ago",
      rating: "4.8",
      image: "https://i.ibb.co/Mkz7MmyW/stock-photo-female-doctor-sitting-her-medical-office-stetoscope.webp",
      message:
        "The Fridge and My Items pages are super intuitive. I can update and track all my food from one place.",
    },
    {
      name: "Kobir Bhai",
      time: "5 days ago",
      rating: "4.2",
      image: "https://i.ibb.co/sv6jTw97/360-F-136187711-qe-BMOwk-Pd-Tg1d-CN8e5-TR1-Amdu-XDz60-Xn.jpg",
      message:
        "The Expired Food and Nearly Expiry sections are genius. They've helped me plan meals smarter every week.",
    },
    {
      name: "Mosh Hamedani",
      time: "Yesterday",
      rating: "4.9",
      image: "https://i.ibb.co/h1hJ65jZ/65ddf3cdf19abaf5688af2f8-shutterstock-1933145801-1-1.jpg",
      message:
        "Great job on the web design! It looks clean, runs smoothly, and works perfectly across devices.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32"> {/* Added more vertical padding and a subtle background */}
      <div className="container mx-auto px-4"> {/* Centralized container with horizontal padding */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20"> {/* Adjusted margin-bottom for responsiveness */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight"> {/* Larger, bolder heading */}
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"> {/* Subheading with improved size and centering */}
            Hear from users who are already benefiting from smart food management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"> {/* Increased gap for larger screens */}
          {people.map((person, index) => (
            <div
              key={index} // Consider using a unique ID from your data instead of index if possible for better performance
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col h-full transform transition-transform duration-300 hover:scale-[1.02]" // Enhanced styling, padding, and hover effect
            >
              <div className="flex justify-between items-start mb-4"> {/* Aligned items better and added bottom margin */}
                <div className="flex items-center space-x-4"> {/* Centered profile image and text vertically */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-14 h-14 rounded-full border-2 border-blue-400 flex-shrink-0" // Slightly larger image with a border
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{person.name}</h4> {/* Bolder, slightly larger name */}
                    <span className="text-sm text-gray-500 mt-0.5">{person.time}</span> {/* Adjusted time font size and spacing */}
                  </div>
                </div>
                <div className="flex items-center space-x-1"> {/* Tighter spacing for rating */}
                  <FaStar color="#facc15" size={20} /> {/* Changed star color to a standard yellow */}
                  <span className="text-xl font-bold text-gray-800">{person.rating}</span>
                </div>
              </div>
              <div className="flex-grow border-t border-gray-200 pt-4 mt-4"> {/* Used flex-grow to ensure consistent card height, adjusted border and padding */}
                <p className="text-base text-gray-700 leading-relaxed">{person.message}</p> {/* Better line height for readability */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;