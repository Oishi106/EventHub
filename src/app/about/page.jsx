import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center max-w-3xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            We bring people together through memorable events
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            EventHub is a community-first events platform that helps organizers create, manage,
            and promote experiences people love. Whether you're hosting a meetup, workshop,
            conference, or concert — we make it simple to reach the right audience.
          </p>
          <div className="flex justify-center">
            <Link href="/events" className="btn btn-primary btn-md">
              Browse Events
            </Link>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-slate-600">
              We make it effortless for organizers to run engaging events and for attendees to
              discover meaningful experiences. We focus on performance, reliability, and
              approachable tools so creators can concentrate on what matters most — the
              experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">How we help</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Event creation and publishing with flexible ticketing options.</li>
              <li>Promotion tools to reach your target audience.</li>
              <li>Attendee management and secure check-in workflows.</li>
              <li>Analytics to help you learn and improve each event.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-slate-600">We build tools that empower creators and connect people.</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-slate-600">We deliver reliable, polished experiences for everyone.</p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-slate-600">We operate openly and protect our users' trust.</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">AJ</div>
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-sm text-slate-500">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">SM</div>
              <p className="font-semibold">Sara Martin</p>
              <p className="text-sm text-slate-500">Head of Product</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">RM</div>
              <p className="font-semibold">Ravi Mehta</p>
              <p className="text-sm text-slate-500">Engineering Lead</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">LL</div>
              <p className="font-semibold">Lina Lee</p>
              <p className="text-sm text-slate-500">Community</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-indigo-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Ready to host or discover great events?</h3>
            <p className="text-slate-600">Create an organizer account or start browsing events in your area.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/auth/register" className="btn btn-primary mr-3">
              Get Started
            </Link>
            <Link href="/events" className="btn btn-ghost">
              Explore Events
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
