"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '@/app/auth/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AddEventPage() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const [form, setForm] = useState({
    image: '',
    title: '',
    description: '',
    price: 'Free Entry',
    detailsUrl: '',
  })

  const [imagePreview, setImagePreview] = useState('')

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (name === 'image') {
      setImagePreview(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (!form.image || !form.title || !form.description || !form.price) {
      setError('Please fill all required fields')
      return
    }

    if (!form.image.startsWith('http')) {
      setError('Please enter a valid image URL (must start with http)')
      return
    }

    try {
      setLoading(true)

      // Prepare data for MongoDB
      const eventData = {
        image: form.image,
        title: form.title,
        description: form.description,
        price: form.price,
        detailsUrl: form.detailsUrl || `/events/${Date.now()}`,
        createdBy: user.email,
        createdAt: new Date().toISOString(),
      }

      // Send to backend
      const response = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (!response.ok) {
        throw new Error('Failed to create event')
      }

      const result = await response.json()

      setSuccess('✅ Event created successfully! Redirecting...')
      setForm({
        image: '',
        title: '',
        description: '',
        price: 'Free Entry',
        detailsUrl: '',
      })
      setImagePreview('')

      // Redirect after 1.5 seconds
      setTimeout(() => {
        router.push('/events')
      }, 1500)
    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'Failed to create event. Please try again.')
    } finally {
      setLoading(false)
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
      

      <main className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-orange-600 to-red-600 mb-2">
              Add New Event
            </h1>
            <p className="text-slate-600 text-lg">Create and share your event with the community</p>
          </div>

          {/* Alert Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              {success}
            </div>
          )}

          {/* Main Content - 3 Cards Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Event Image Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-4">
                <div className="bg-linear-to-br from-orange-400 to-red-500 p-6 text-white">
                  <h2 className="text-xl font-bold mb-2">📸 Event Preview</h2>
                  <p className="text-orange-100 text-sm">Your event will look like this</p>
                </div>

                <div className="p-6">
                  {imagePreview ? (
                    <>
                      <div className="mb-4 rounded-lg overflow-hidden bg-slate-100 aspect-video">
                        <img
                          src={imagePreview}
                          alt="Event preview"
                          className="w-full h-full object-cover"
                          onError={() => setImagePreview('')}
                        />
                      </div>
                      <div className="space-y-3 mb-4 p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Title</p>
                          <p className="font-bold text-slate-800 line-clamp-2">{form.title || 'Event Title'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Price</p>
                          <p className="font-bold text-orange-600">{form.price || 'Free Entry'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Description</p>
                          <p className="text-sm text-slate-700 line-clamp-3">{form.description || 'Event description will appear here...'}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p className="text-slate-500 text-sm">Add image URL to preview</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2: Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">📝 Event Details</h2>

                {/* Image URL */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Image URL <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://i.ibb.co.com/9HMvg87v/Digital-Art-Exhibition.jpg"
                    className="input input-bordered w-full"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">Must start with http:// or https://</p>
                </div>

                {/* Event Title */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Event Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g., Digital Art Exhibition"
                    className="input input-bordered w-full"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">Give your event a clear, catchy title</p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="e.g., An exhibition showcasing modern digital art from global creators..."
                    className="textarea textarea-bordered w-full h-28"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">Describe what attendees can expect from your event</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Price <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g., Free Entry, $50, $99.99"
                    className="input input-bordered w-full"
                    required
                  />
                  <p className="text-xs text-slate-500 mt-1">Enter price (e.g., 'Free Entry', '$50', '$99.99')</p>
                </div>

                {/* Details URL (Optional) */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-2">
                    Details URL <span className="text-slate-500 text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="detailsUrl"
                    value={form.detailsUrl}
                    onChange={handleChange}
                    placeholder="/events/123 (leave empty for auto-generate)"
                    className="input input-bordered w-full"
                  />
                  <p className="text-xs text-slate-500 mt-1">If empty, a unique URL will be generated</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t">
                  <button
                    type="submit"
                    className={`btn btn-primary flex-1 ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Creating Event...' : '✅ Create Event'}
                  </button>
                  <Link href="/events" className="btn btn-outline flex-1">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-slate-800 mb-2">Professional Images</h3>
              <p className="text-sm text-slate-600">Use high-quality event images from URLs (ibb.co, unsplash, etc.)</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-3">📢</div>
              <h3 className="font-bold text-slate-800 mb-2">Clear Descriptions</h3>
              <p className="text-sm text-slate-600">Write engaging descriptions to attract more attendees</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="font-bold text-slate-800 mb-2">Auto-Saved</h3>
              <p className="text-sm text-slate-600">Your event is immediately added to our database</p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link href="/events" className="btn btn-outline">
              ← Back to Events
            </Link>
          </div>
        </div>
      </main>

     
    </>
  )
}
