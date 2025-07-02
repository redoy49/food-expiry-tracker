import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const people = [
    {
      name: "Sumaiya Afrin",
      time: "3 days ago",
      rating: "4.8",
      image: "https://i.ibb.co/LXqPK69K/Screenshot-2025-04-22-190539.png",
      message:
        "This website has made food management so much easier. I can now track expiry dates and avoid waste effortlessly.",
    },
    {
      name: "Robert Bruce",
      time: "1 week ago",
      rating: "5.0",
      image:
        "https://i.ibb.co/m5v2R0Kb/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg",
      message:
        "I love using this site on both my laptop and phone. It's responsive, easy to use, and actually helps me save groceries.",
    },
    {
      name: "Redoy Al Hasan",
      time: "5 days ago",
      rating: "4.0",
      image:
        "https://i.ibb.co/DgKtFb3h/stock-photo-doctor-white-coat-glasses-holding-clipboard-looking-camera-isolated-blue.webp",
      message:
        "A must-have tool for anyone serious about reducing food waste. The reminders are timely and effective!",
    },
    {
      name: "Emily Akter",
      time: "2 weeks ago",
      rating: "4.8",
      image:
        "https://i.ibb.co/Mkz7MmyW/stock-photo-female-doctor-sitting-her-medical-office-stetoscope.webp",
      message:
        "The Fridge and My Items pages are super intuitive. I can update and track all my food from one place.",
    },
    {
      name: "Kobir Bhai",
      time: "5 days ago",
      rating: "4.2",
      image:
        "https://i.ibb.co/sv6jTw97/360-F-136187711-qe-BMOwk-Pd-Tg1d-CN8e5-TR1-Amdu-XDz60-Xn.jpg",
      message:
        "The Expired Food and Nearly Expiry sections are genius. They've helped me plan meals smarter every week.",
    },
    {
      name: "Mosh Hamedani",
      time: "Yesterday",
      rating: "4.9",
      image:
        "https://i.ibb.co/h1hJ65jZ/65ddf3cdf19abaf5688af2f8-shutterstock-1933145801-1-1.jpg",
      message:
        "Great job on the web design! It looks clean, runs smoothly, and works perfectly across devices.",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg px-4 py-8 sm:py-12 lg:py-16 md:px-6 lg:px-10">
      <header className="text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight">
          What Our <span className="text-blue-600">Clients</span> Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Hear from users who are already benefiting from smart food management.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
        {people.map((person, i) => (
          <article
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="object-cover w-14 h-14 rounded-full border-2 border-blue-400 flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {person.name}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {person.time}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <FaStar color="#facc15" size={20} />
                <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {person.rating}
                </span>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {person.message}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
