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
    <div className="rounded-2xl pt-16">
      <h2 className="text-3xl text-secondary font-bold text-center mb-14">
        What our client say?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-slate-50 flex flex-col w-full max-w-lg p-6 mx-auto rounded-md dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
                <div>
                  <h4 className="font-bold">{person.name}</h4>
                  <span className="text-xs dark:text-gray-600">
                    {person.time}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar color="orange" size={20} />
                <span className="text-xl font-bold">{person.rating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm border-t border-slate-300 dark:text-gray-600">
              <p>{person.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;