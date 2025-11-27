"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '@/app/auth/firebase.config'
import { onAuthStateChanged, updateProfile, updatePassword, deleteUser } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('profile')
  const router = useRouter()

  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    phone: '',
    bio: '',
    location: '',
  })

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setAuthLoading(false)

      if (!currentUser) {
        router.push('/auth/login')
      } else {
        setProfile({
          displayName: currentUser.displayName || '',
          email: currentUser.email || '',
          phone: '+1 (555) 123-4567',
          bio: 'Event organizer and community builder passionate about connecting people.',
          location: 'San Francisco, CA',
        })
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      setLoading(true)
      if (user && profile.displayName !== user.displayName) {
        await updateProfile(user, { displayName: profile.displayName })
      }
      setSuccess('Profile updated successfully! 🎉')
      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError(err.message || 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('New passwords do not match')
      return
    }

    if (passwordForm.newPassword.length < 6) {
      setError('New password must be at least 6 characters')
      return
    }

    try {
      setLoading(true)
      // Simulate password change
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess('Password changed successfully! 🎉')
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError('Failed to change password')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        setLoading(true)
        // Simulate account deletion
        await new Promise((resolve) => setTimeout(resolve, 1000))
        if (user) {
          await deleteUser(user)
        }
        router.push('/')
      } catch (err) {
        setError('Failed to delete account')
        setLoading(false)
      }
    }
  }

  if (authLoading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
        <Footer />
      </>
    )
  }

  if (!user) {
    return null
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600 mb-2">
              Profile Settings
            </h1>
            <p className="text-slate-600">Manage your account information and preferences</p>
          </div>

          {/* Alert Messages */}
          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">{error}</div>}
          {success && <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg">{success}</div>}

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Profile Card */}
                <div className="bg-linear-to-br from-purple-400 to-pink-500 p-6 text-white">
                  <div className="mb-4">
                    <img
                      src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                      alt={user.displayName || 'User'}
                      className="w-20 h-20 rounded-full border-4 border-white"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{user.displayName || 'User'}</h2>
                  <p className="text-purple-100 text-sm">{user.email}</p>
                </div>

                {/* Navigation Tabs */}
                <div className="p-4 space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    📋 Profile Info
                  </button>
                  <button
                    onClick={() => setActiveTab('password')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === 'password'
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    🔐 Change Password
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ⚙️ Settings
                  </button>
                  <button
                    onClick={() => setActiveTab('danger')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === 'danger'
                        ? 'bg-red-100 text-red-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ⚠️ Danger Zone
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Profile Information</h2>

                    <div>
                      <label className="block text-sm font-medium mb-2">Display Name</label>
                      <input
                        type="text"
                        name="displayName"
                        value={profile.displayName}
                        onChange={handleProfileChange}
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={profile.email}
                        disabled
                        className="input input-bordered w-full bg-slate-50"
                      />
                      <p className="text-xs text-slate-500 mt-1">Email cannot be changed</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={profile.location}
                        onChange={handleProfileChange}
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleProfileChange}
                        className="textarea textarea-bordered w-full h-24"
                      />
                    </div>

                    <button type="submit" className={`btn btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
                      Save Changes
                    </button>
                  </form>
                )}
               

               
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link href="/dashboard" className="btn btn-outline">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
