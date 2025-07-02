import React from "react";

const Faq = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-16 px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We’ve got answers. Below you'll find common questions about using the app effectively.
        </p>
      </div>

      <div className="space-y-4">
        {/* Q1 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title text-base md:text-lg font-semibold">
            1. How does the tracker notify me of upcoming expiry dates?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            The website highlights foods that will expire within 5 days in the "Nearly Expiry" section, so you can use them before they go bad.
          </div>
        </div>

        {/* Q2 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base md:text-lg font-semibold">
            2. Do I need to create an account to use the features?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            Yes, you'll need to register and log in to add, edit, or view your personal food items. This keeps your data secure and personalized.
          </div>
        </div>

        {/* Q3 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base md:text-lg font-semibold">
            3. Can I edit or delete my added food items?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            Absolutely! Go to the My Items page where you can update or delete any of your added items using the action buttons.
          </div>
        </div>

        {/* Q4 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base md:text-lg font-semibold">
            4. Can I add personal notes to a food item?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            Yes! On the Food Details page, if you're the one who added the item, you can write and save personal notes for that food.
          </div>
        </div>

        {/* Q5 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base md:text-lg font-semibold">
            5. Is my data secure?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            Yes. We use Firebase Authentication and secure API routes with JWT to ensure that your data is protected and accessible only to you.
          </div>
        </div>

        {/* Q6 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base md:text-lg font-semibold">
            6. Is this web app mobile-friendly?
          </div>
          <div className="collapse-content text-sm md:text-base text-gray-700">
            Yes, the entire application is fully responsive and works smoothly on mobile phones, tablets, and desktops.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
