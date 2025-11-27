import React from "react";

export default function () {
  return (
    <div className="bg-blue-50 border border-blue-50 ">

      <div className="max-w-7xl mx-auto ">
        <div className="text-center   max-w-3xl mx-auto">
          <h1 className="text-gray-700 text-[30px] mt-[50px] font-semibold mb-6">
            Discover Amazing Events Near You
          </h1>

          <p className="text-gray-600 mb-8">
            Connect with people who share your interests. Explore thousands of events or create your own. Your next great experience starts here.
          </p>

          <div className="flex flex-col mt-[30px] mb-[50px] sm:flex-row gap-4 justify-center">
            <a className="px-8 py-3 btn text-cyan-800 bg-cyan-500 border-cyan-800 hover:bg-amber-50 transition-colors" href="/events" data-discover="true">
              Explore Events
            </a>
            <a className="px-8 py-3  bg-white border-cyan-800 text-cyan-800 btn rounded-lg hover:bg-blue-50 transition-colors" href="/auth/register" data-discover="true">
              Get Started
            </a>
          </div>
        </div>

        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-50 rounded-3xl">
          <div className="max-w-7xl ">
            <div className="text-center mb-12">
              <h2 className="text-cyan-700 text-[30px] font-semibold mb-4">
                Why Choose EventHub

              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to discover, create, and manage exceptional events

              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>

                </div>
                <h3 className="text-gray-900 mb-2">Easy Event Creation</h3>
                <p className="text-sm text-gray-600">Create and publish your event in minutes with our intuitive tools</p>

              </div>


              <div class="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-100">

                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>

                </div>

                <h3 className="text-gray-900 mb-2">Community Driven</h3>
                <p className="text-sm text-gray-600">Connect with like-minded people and grow your network</p>
              </div>


              <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-green-100">

                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                </div>

                <h3 className="text-gray-900 mb-2">Local & Global</h3>
                <p className="text-sm text-gray-600">Discover events happening near you or anywhere in the world</p>
              </div>



              <div className="p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-orange-100">

                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>

                </div>

                <h3 className="text-gray-900 mb-2">Top Quality Events</h3>
                <p className="text-sm text-gray-600">Curated selection of high-quality events across all categories</p>
              </div>

            </div>
          </div>
        </div>




      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

        </div>

      </div>




    </div>

  );
}
