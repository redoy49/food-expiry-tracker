import React from "react";

const Newsletter = () => {
  return (
    <section className="my-14">
      <div className="bg-slate-50 mx-auto max-w-[1440px] py-16 px-6 rounded-lg">
        <div className="max-w-screen-md mx-auto text-center">
          <header className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Subscribe to Our <span className="text-green-600">Newsletter</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest tips, announcements, and exclusive discounts. Sign up with your email below!
            </p>
          </header>

          <form onSubmit={e => e.preventDefault()} className="space-y-4 max-w-screen-sm mx-auto">
            <div className="flex flex-col sm:flex-row sm:space-x-0 space-y-4 sm:space-y-0 items-center">
              <div className="relative w-full">
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full p-3 pl-10 text-sm text-gray-900 bg-white rounded-l-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-5 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-r-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-left text-gray-500">
              We care about the protection of your data.{" "}
              <a href="#" className="font-medium text-green-600 hover:underline">
                Read our Privacy Policy
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
