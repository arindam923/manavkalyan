import React from "react";

type Props = {};

export default function NewsLetterSubscription({}: Props) {
  return (
    <div className="bg-gradient-to-r mt-4 from-yellow-400 to-orange-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Stay Updated with Our Mission
        </h2>
        <p className="text-white mb-8">
          Subscribe to our newsletter to receive the latest news and updates
          about our work, events, and how you can get involved.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-4 sm:mb-0 sm:mr-4"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
