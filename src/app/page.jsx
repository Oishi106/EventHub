import React from "react";
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
export const dynamic = "force-dynamic";
export default async function HomePage() {
  let featured = []
  try {

    const res = await fetch('https://my-first-project-with-next-backend.vercel.app/details', { cache: 'no-store' })
    if (res.ok) {
      const all = await res.json()
      featured = (all || []).slice(0, 3)
    }
  } catch (err) {
    // silent fail — page will render without featured events
    console.error('Failed to fetch featured events', err)
  }

  return (
    <div className="bg-blue-50 border border-blue-50 ">

      <div className="max-w-7xl mx-auto ">
        {/* Hero Carousel Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <HeroCarousel />
        </div>

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

        {/* Featured events */}
        {featured && featured.length > 0 && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Featured Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((ev) => (
                  <Link key={ev._id} href={`/events/${ev._id}`} className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
                    <div className="h-44 w-full overflow-hidden">
                      <img src={ev.image || 'https://via.placeholder.com/600x400'} alt={ev.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-slate-800">{ev.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mt-2">{ev.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-slate-500">{ev.price || 'Free'}</span>
                        <span className="text-sm text-slate-500">{ev.location || ''}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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


              <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-100">

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

        {/* Vibrant categories */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-500 rounded-3xl p-[1px] shadow-lg">
            <div className="bg-white rounded-3xl p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-700">Curated Collections</p>
                  <h2 className="text-3xl font-semibold text-slate-900 mt-2">Find your perfect vibe</h2>
                  <p className="text-slate-600 mt-3 max-w-2xl">Dive into hand-picked categories tailored for every mood, whether you are learning, celebrating, or building community.</p>
                </div>
                <a className="px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition" href="/events">Browse all</a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                  title: 'Creativity & Culture',
                  desc: 'Gallery nights, spoken word, maker fairs that light up your senses.',
                  accent: 'from-pink-500/90 via-orange-400/90 to-amber-300/90'
                }, {
                  title: 'Growth & Learning',
                  desc: 'Workshops, bootcamps, and masterminds that level up your craft.',
                  accent: 'from-emerald-500/90 via-teal-400/90 to-cyan-300/90'
                }, {
                  title: 'Wellness & Community',
                  desc: 'Mindful meetups, runs, retreats, and causes that make impact.',
                  accent: 'from-indigo-500/90 via-blue-500/90 to-sky-300/90'
                }].map((card) => (
                  <div key={card.title} className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-90`} aria-hidden="true" />
                    <div className="relative h-full bg-white/60 backdrop-blur-sm p-6 flex flex-col gap-3">
                      <span className="inline-flex w-max px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-slate-800 shadow-sm">Curated</span>
                      <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                      <p className="text-sm text-slate-700 flex-1">{card.desc}</p>
                      <div className="flex items-center justify-between text-sm font-semibold text-cyan-800">
                        <span className="group-hover:translate-x-1 transition">Explore events</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-indigo-600/20" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">How EventHub Works</p>
                  <h2 className="text-3xl font-semibold mt-2">Plan smarter, experience better</h2>
                  <p className="text-slate-200 mt-3 max-w-2xl">A guided path from discovery to celebration, so you spend less time coordinating and more time enjoying.</p>
                </div>
                <a className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow hover:-translate-y-0.5 transition" href="/add-event">Host an event</a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {[{
                  step: '01',
                  title: 'Discover',
                  desc: 'Filter by date, vibe, and location to surface what actually fits your schedule.'
                }, {
                  step: '02',
                  title: 'Save & Share',
                  desc: 'Bookmark favorites and send invites with built-in sharing for friends or teams.'
                }, {
                  step: '03',
                  title: 'Register',
                  desc: 'Secure, fast checkout with clear event details, reminders, and calendar sync.'
                }, {
                  step: '04',
                  title: 'Show up',
                  desc: 'Day-of essentials in one place—tickets, directions, and real-time updates.'
                }].map((item) => (
                  <div key={item.step} className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/30 blur-2xl" aria-hidden="true" />
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20 text-sm font-semibold">{item.step}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-200 via-pink-200 to-rose-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700">Trusted by hosts & attendees</p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">Stories from the community</h2>
              <p className="text-slate-700 mt-3">People use EventHub to spark ideas, launch movements, and keep their circles thriving.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                name: 'Anika, Design Lead',
                quote: 'We filled our creative retreat in 48 hours. The visuals and flow made it effortless.',
                badge: 'Host'
              }, {
                name: 'Marcus, Community Builder',
                quote: 'RSVPs, reminders, feedback—everything is clean and on-brand. Our members love it.',
                badge: 'Organizer'
              }, {
                name: 'Talia, Attendee',
                quote: 'I discover niche workshops weekly. Checkout is quick, and I never miss an update.',
                badge: 'Member'
              }].map((card) => (
                <div key={card.name} className="h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-lg p-6 flex flex-col gap-4 hover:-translate-y-1 transition">
                  <span className="inline-flex w-max px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-xs font-semibold">{card.badge}</span>
                  <p className="text-slate-800 text-sm leading-relaxed">“{card.quote}”</p>
                  <div className="text-sm font-semibold text-slate-900">{card.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-slate-200">
              
              {/* About Us Column */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b-2 border-cyan-600">ABOUT US</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Discover and manage events effortlessly. EventHub empowers organizers to create unforgettable experiences and helps attendees find events that matter.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:support@eventhub.com" className="text-slate-600 hover:text-cyan-700 text-sm transition">support@eventhub.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-600 text-sm">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Popular Searches Column */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b-2 border-cyan-600">POPULAR SEARCHES</h3>
                <ul className="space-y-2.5">
                  {[
                    'Online Registration',
                    'Sell Event Tickets',
                    'Post Events',
                    'Event Planning Software',
                    'Online Event Management',
                    'Event Management Software',
                    'Event Payment',
                    'Virtual Events'
                  ].map((item, index) => (
                    <li key={index}>
                      <button className="text-slate-600 hover:text-cyan-700 text-sm transition duration-200 inline-flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full group-hover:translate-x-1 transition-transform"></span>
                        <span>{item}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Column */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b-2 border-cyan-600">QUICK LINKS</h3>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Create Event', href: '/add-event' },
                    { label: 'Browse Events', href: '/events' },
                    { label: 'My Profile', href: '/profile' },
                    { label: 'Terms & Conditions', href: '/contract' },
                    { label: 'Privacy Policy', href: '/contract' },
                    { label: 'Contact Us', href: '/contact' },
                    { label: 'Help Center', href: '/' },
                    { label: 'Support', href: '/contact' }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-slate-600 hover:text-cyan-700 text-sm transition duration-200 inline-flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full group-hover:translate-x-1 transition-transform"></span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>

  );
}
