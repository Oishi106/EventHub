"use client"

import React, { useState, useEffect, use } from 'react'
import Link from 'next/link'
export const dynamic = "force-dynamic";

export default function EventDetailPage({ params }) {
  const { id } = use(params)
  const routeId = id || ''
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [eventData, setEventData] = useState(null)

  useEffect(() => {    
    const loadDetails = async () => {
      setError('')
      setEventData(null)        

      if (!routeId) {
        setError('Event ID is missing from the route')
        setLoading(false)
        return
      }

      try {
        const res = await fetch(`https://my-first-project-with-next-backend.vercel.app/details/${routeId}`)
        if (!res.ok) throw new Error(`API returned ${res.status}`)
        const data = await res.json()
        setEventData(data)
      } catch (err) {
        setError(err.message || 'Failed to load event')
      } finally {
        setLoading(false)
      }         
    }

    loadDetails()
  }, [routeId])

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow p-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="ml-3 text-slate-600">Loading event details...</p>
            </div>
          )}

          {error && !loading && <div className="text-red-700 bg-red-50 p-3 rounded">{error}</div>}

          {!loading && eventData && (
            <>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={eventData.image || eventData.imageUrl || eventData.banner || 'https://via.placeholder.com/800x400?text=Event+Image'}
                  alt={eventData.title || 'Event'}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold text-rose-600">{eventData.title || eventData.name || 'Untitled'}</h2>
                  <p className="text-slate-700 mt-2">{eventData.description || eventData.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(eventData.tags || []).map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm">{t}</span>
                    ))}
                  </div>
                </div>

              </div>

              <aside className="p-4 bg-indigo-50 rounded-lg border">
                <div className="text-sm text-slate-600">When</div>
                <div className="font-semibold">{eventData.date || 'TBA'}</div>

                <div className="mt-3 text-sm text-slate-600">Where</div>
                <div className="font-medium">{eventData.location || eventData.venue || 'TBA'}</div>

                <div className="mt-4">
                  <div className="text-sm text-slate-600">Price</div>
                  <div className="font-semibold text-emerald-600">{eventData.price ? `$${eventData.price}` : 'Free'}</div>
                </div>


              </aside>
              <div className="mt-4 text-center">
                <Link href="/events" className="text-sm text-cyan-600">← Back to events</Link>
              </div>
            </>
          )}
        </div>
      </main>


    </>
  )
}
