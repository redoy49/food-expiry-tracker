import React from "react";

const Faq = () => {
  return (
    <div className="faq-wrapper md:my-24">
      <h2 className="font-bold text-secondary text-xl md:text-3xl text-center my-8 md:my-12">
        Frequently Asked Question
      </h2>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          1. How does the tracker notify me of upcoming expiry dates?
        </div>
        <div className="collapse-content text-sm">
          The website highlights foods that will expire within 5 days in the
          "Nearly Expiry" section, so you can use them before they go bad.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          2. Do I need to create an account to use the features?
        </div>
        <div className="collapse-content text-sm">
          Yes, you'll need to register and log in to add, edit, or view your
          personal food items. This keeps your data secure and personalized.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I edit or delete my added food items?
        </div>
        <div className="collapse-content text-sm">
          Absolutely! Go to the My Items page where you can update or delete any
          of your added items using the action buttons.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          4. Can I add personal notes to a food item?
        </div>
        <div className="collapse-content text-sm">
          Yes! On the Food Details page, if you're the one who added the item,
          you can write and save personal notes for that food.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          5. Is my data secure?
        </div>
        <div className="collapse-content text-sm">
          Yes. We use Firebase Authentication and secure API routes with JWT to
          ensure that your data is protected and accessible only to you.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          6. Is this web app mobile-friendly?
        </div>
        <div className="collapse-content text-sm">
          Yes, the entire application is fully responsive and works smoothly on
          mobile phones, tablets, and desktops.
        </div>
      </div>
    </div>
  );
};

export default Faq;