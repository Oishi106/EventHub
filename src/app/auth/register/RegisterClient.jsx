"use client"

import React, { useState, useMemo } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function passwordStrength(password) {
    let score = 0
    if (!password) return { score, label: 'Too short' }
    if (password.length >= 6) score += 1
    if (/[A-Z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    const labels = ['Very weak', 'Weak', 'Okay', 'Strong', 'Very strong']
    return { score, label: labels[Math.min(score, labels.length - 1)] }
}

export default function RegisterClient() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', password: '', terms: false })

    const strength = useMemo(() => passwordStrength(form.password), [form.password])

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!form.name || !form.email || !form.password) {
            setError('Please complete all fields')
            return
        }
        if (!form.terms) {
            setError('You must accept the Terms of Service')
            return
        }

        try {
            setLoading(true)
            const result = await createUserWithEmailAndPassword(auth, form.email, form.password)
            await updateProfile(result.user, { displayName: form.name }).catch(() => { })
            setSuccess('Account created — redirecting...')
            setTimeout(() => router.push('/dashboard'), 900)
        } catch (err) {
            console.error(err)
            const message = err?.message || 'Registration failed'
            setError(message.replace('Firebase: ', ''))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-cyan-50 flex items-center">
            <div className="max-w-6xl mx-auto w-full p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <aside className="p-8 rounded-lg bg-white shadow">
                        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-indigo-600">Welcome to EventHub</h2>
                        <p className="mt-3 text-slate-600">Create an organizer account or join as an attendee — secure payments, analytics, and an intuitive dashboard.</p>

                        <ul className="mt-6 space-y-3">
                            <li className="flex gap-3 items-start">
                                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">✓</div>
                                <div>
                                    <div className="font-medium">Secure payments</div>
                                    <div className="text-sm text-slate-600">Tokenized payments and fraud protection.</div>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-semibold">★</div>
                                <div>
                                    <div className="font-medium">Promotion tools</div>
                                    <div className="text-sm text-slate-600">Built-in marketing and analytics to grow attendance.</div>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold">⚡</div>
                                <div>
                                    <div className="font-medium">Fast setup</div>
                                    <div className="text-sm text-slate-600">Create your first event in minutes.</div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 text-sm text-slate-600">Already a member? <Link href="/auth/login" className="text-cyan-600 font-medium">Log in</Link></div>
                    </aside>

                    <form onSubmit={handleRegister} className="p-8 rounded-lg bg-white shadow">
                        {error && <div className="text-sm text-red-700 bg-red-50 p-2 rounded mb-4">{error}</div>}
                        {success && <div className="text-sm text-emerald-700 bg-emerald-50 p-2 rounded mb-4">{success}</div>}

                        <div className="grid gap-3">
                            <label className="text-sm">Full name</label>
                            <input name="name" value={form.name} onChange={onChange} className="input input-bordered" placeholder="Jane Doe" />

                            <label className="text-sm">Email</label>
                            <input name="email" value={form.email} onChange={onChange} type="email" className="input input-bordered" placeholder="you@example.com" />

                            <label className="text-sm">Password</label>
                            <div className="relative">
                                <input name="password" value={form.password} onChange={onChange} type={showPassword ? 'text' : 'password'} className="input input-bordered w-full" placeholder="Create a password" />
                                <button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-2 top-2 btn btn-ghost btn-sm">{showPassword ? 'Hide' : 'Show'}</button>
                            </div>

                          

                            <label className="flex items-center gap-2 mt-2">
                                <input name="terms" type="checkbox" checked={form.terms} onChange={onChange} className="checkbox" />
                                <span className="text-sm text-slate-600">I agree to the <Link href="/legal/terms" className="text-cyan-600">Terms of Service</Link> and <Link href="/legal/privacy" className="text-cyan-600">Privacy Policy</Link></span>
                            </label>

                            <button type="submit" className={`btn btn-primary mt-3 ${loading ? 'loading' : ''}`} disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>

                            <div className="divider">or</div>

                            <div className="grid grid-cols-1 gap-2">
                                <button className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Continue with Google
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
