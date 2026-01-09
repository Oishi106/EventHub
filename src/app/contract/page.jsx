import React from 'react'
import Link from 'next/link'

export default function Contract() {
  return (
    <>
     

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="text-center mb-8">
          <p className="text-sm text-cyan-700 font-semibold uppercase mb-2">Contract & Terms</p>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-blue-600">Service Agreement & Terms</h1>
          <p className="text-slate-600 mt-3">Clear, fair terms for organizers and attendees using EventHub — explained plainly so you can get back to building great experiences.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-slate-600">
              This agreement outlines the responsibilities and expectations between EventHub
              (the platform) and event organizers or attendees who use our services. It covers
              service scope, payment terms, cancellation policy, data use, and liability.
            </p>

            <h3 className="mt-6 font-semibold">Who this applies to</h3>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
              <li>Event organizers publishing and selling tickets through EventHub.</li>
              <li>Attendees purchasing tickets or registering for events using our platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Services & Fees</h2>
            <p className="text-slate-600">We provide event publishing, ticketing, promotion tools, and attendee management.</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
              <li>Platform fee: a small percentage of each ticket sale (details in organizer dashboard).</li>
              <li>Payment processing: handled by our payments partner — fees may apply.</li>
              <li>Optional premium features: billed separately when enabled by the organizer.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Cancellation & Refunds</h2>
          <p className="text-slate-600">Organizers set their own refund and cancellation policies which are displayed to attendees at purchase. EventHub facilitates refunds where applicable and may hold funds pending dispute resolution.</p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-white">
              <h4 className="font-semibold">Organizer Cancellations</h4>
              <p className="text-sm text-slate-600 mt-2">Organizers should notify attendees promptly. Refund handling follows organizer policy.</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h4 className="font-semibold">Attendee Refunds</h4>
              <p className="text-sm text-slate-600 mt-2">Requests are processed according to the event's stated policy and payment processor timelines.</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h4 className="font-semibold">Force Majeure</h4>
              <p className="text-sm text-slate-600 mt-2">In the event of circumstances outside reasonable control, parties will make reasonable efforts to reschedule or refund.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-indigo-600 inline-block">Data & Privacy</h2>
          <p className="text-slate-600">We respect your privacy. Below is a concise summary of what we collect, why we collect it, how long we keep it, and the choices you have.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-50">
              <h4 className="font-semibold">What we collect</h4>
              <ul className="text-sm text-slate-700 mt-2 list-disc list-inside space-y-1">
                <li>Contact info: name, email, phone (organizers & attendees).</li>
                <li>Payment info: tokenized payment identifiers (processed by partners).</li>
                <li>Event data: listings, tickets sold, attendee lists, check-in status.</li>
                <li>Usage data: device, IP, clicks and performance metrics for product improvement.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-rose-500 bg-rose-50">
              <h4 className="font-semibold">Why we use it</h4>
              <p className="text-sm text-slate-700 mt-2">To deliver core services: ticketing, payments, communication with attendees, fraud prevention, analytics, and product improvements. We never sell personal data to third-party marketers.</p>
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <h5 className="font-semibold">Retention</h5>
              <p className="text-sm text-slate-600 mt-2">We retain event and transaction records for up to 7 years for financial and legal obligations; other personal data is retained only as long as reasonably necessary.</p>
            </div>
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <h5 className="font-semibold">Your rights</h5>
              <p className="text-sm text-slate-600 mt-2">Access, correct, or request deletion of your personal data. To exercise those rights email <span className="font-medium">privacy@eventhub.example</span>.</p>
            </div>
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <h5 className="font-semibold">Security</h5>
              <p className="text-sm text-slate-600 mt-2">We use industry-standard encryption in transit and at rest, regular security audits, and strict access controls to protect data.</p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-indigo-50 border-l-4 border-indigo-400">
            <h5 className="font-semibold">Third parties & processors</h5>
            <p className="text-sm text-slate-700 mt-2">We share necessary data with trusted service providers (payment processors, email delivery, analytics). Each partner is contractually required to protect data and only process it for the purposes described.</p>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-400">
            <h5 className="font-semibold">Choices & opt-out</h5>
            <p className="text-sm text-slate-700 mt-2">You can opt out of marketing emails, control notification preferences in your account, or request data export/deletion by contacting <span className="font-medium">privacy@eventhub.example</span>.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Liability & Indemnification</h2>
          <p className="text-slate-600">EventHub is a technology platform. Organizers are responsible for event content, compliance with laws, and attendee safety. Our liability is limited as described in the full Terms of Service.</p>
        </section>

        <section className="mt-10 bg-indigo-50 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Need the full contract?</h3>
            <p className="text-slate-600">The summary above highlights key points. For the complete legal agreement, download or contact our team.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/legal/terms.pdf" className="btn btn-outline btn-sm mr-3">Download Terms (PDF)</Link>
            <Link href="/contact" className="btn btn-primary btn-sm">Contact Legal</Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Contact for Contracts</h2>
          <p className="text-slate-600">For partnership agreements, bulk-ticketing contracts, or bespoke event services reach out to our partnerships team.</p>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <p className="font-semibold">Partnerships       </p>
              <p className="text-sm text-slate-600">partners@eventhub.example</p>
            </div>
            <div className="p-4 border rounded">
              <p className="font-semibold">Legal & Compliance</p>
              <p className="text-sm text-slate-600">legal@eventhub.example</p>
            </div>
          </div>
        </section>

      </main>

      
    </>
  )
}
