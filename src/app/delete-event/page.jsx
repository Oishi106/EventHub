"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '@/app/auth/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DeleteEventPage() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(null)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [deleteModal, setDeleteModal] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setAuthLoading(false)

      if (!currentUser) {
        router.push('/auth/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  // Fetch events from MongoDB
  useEffect(() => {
    if (user && !authLoading) {
      fetchEvents()
    }
  }, [user, authLoading])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://my-first-project-with-next-backend.vercel.app/details')
      
      if (!response.ok) {
        throw new Error('Failed to fetch events')
      }

      const data = await response.json()
      setEvents(data || [])
      setError('')
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events. Make sure your backend is running.')
      setEvents([])
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (event) => {
    setDeleteModal(event)
  }

  const confirmDelete = async (eventId) => {
    try {
      setDeleting(eventId)

      // Send delete request to backend
      const response = await fetch(`https://my-first-project-with-next-backend.vercel.app/details/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to delete event')
      }

      // Remove from local state
      setEvents((prev) => prev.filter((event) => event._id !== eventId))
      setSuccess('✅ Event deleted successfully!')
      setDeleteModal(null)

      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      console.error('Error deleting event:', err)
      setError('Failed to delete event. Please try again.')
    } finally {
      setDeleting(null)
    }
  }

  if (authLoading) {
    return (
      <>
      
        <div className="flex items-center justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    
      </>
    )
  }

  if (!user) {
    return null
  }

  return (
    <>
    

      <main className="min-h-screen bg-linear-to-br from-rose-50 to-red-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-red-600 mb-2">
              All Events
            </h1>
            <p className="text-slate-600 text-lg">View all events in your database. Click delete button to remove.</p>
          </div>

          {/* Alert Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 border border-red-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-2 border border-emerald-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              {success}
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
              <p className="text-slate-600">Loading events from database...</p>
            </div>
          ) : events.length === 0 ? (
            // Empty State
            <div className="text-center py-20 bg-white rounded-lg shadow-lg">
              <div className="text-6xl mb-4">📭</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">No Events Found</h2>
              <p className="text-slate-600 mb-6">Your database is empty. Start by creating a new event!</p>
              <Link href="/add-event" className="btn btn-primary">
                ➕ Create First Event
              </Link>
            </div>
          ) : (
            // Events Grid
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Event Image */}
                    <div className="md:w-1/4 shrink-0">
                      <img
                        src={event.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Error'
                        }}
                      />
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">{event.title}</h2>
                        <p className="text-slate-600 mb-3 line-clamp-2">{event.description}</p>

                        {/* Tags if available */}
                        {event.tags && event.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Event Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          {event.date && (
                            <div>
                              <p className="text-slate-500 font-medium">📅 Date</p>
                              <p className="text-slate-800 font-semibold">
                                {new Date(event.date).toLocaleDateString()}
                              </p>
                            </div>
                          )}

                          {event.location && (
                            <div>
                              <p className="text-slate-500 font-medium">📍 Location</p>
                              <p className="text-slate-800 font-semibold">{event.location}</p>
                            </div>
                          )}

                          <div>
                            <p className="text-slate-500 font-medium">💰 Price</p>
                            <p className="text-slate-800 font-semibold">{event.price}</p>
                          </div>

                          {event.attendees && (
                            <div>
                              <p className="text-slate-500 font-medium">👥 Attendees</p>
                              <p className="text-slate-800 font-semibold">{event.attendees}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">
                        <Link
                          href={`/events/${event._id}`}
                          className="btn btn-sm btn-outline flex-1"
                        >
                          👁️ View
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(event)}
                          className="btn btn-sm btn-error text-white"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Refresh Button */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={fetchEvents}
              className="btn btn-outline"
              disabled={loading}
            >
              🔄 Refresh Events
            </button>
            <Link href="/add-event" className="btn btn-primary">
              ➕ Add New Event
            </Link>
          </div>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            {/* Event Image Preview */}
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                src={deleteModal.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                alt={deleteModal.title}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200?text=Image+Error'
                }}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">Delete Event?</h3>
            <p className="text-slate-600 mb-2">
              <strong>{deleteModal.title}</strong>
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Are you sure you want to delete this event? This action cannot be undone and will permanently remove it from your database.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal(null)}
                className="btn btn-outline flex-1"
                disabled={deleting === deleteModal._id}
              >
                Cancel
              </button>
              <button
                onClick={() => confirmDelete(deleteModal._id)}
                className={`btn btn-error text-white flex-1 ${
                  deleting === deleteModal._id ? 'loading' : ''
                }`}
                disabled={deleting === deleteModal._id}
              >
                {deleting === deleteModal._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

    
    </>
  )
}
