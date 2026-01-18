"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);         

  const provider = new GoogleAuthProvider();

  const handleGoogle = async () => {
    setError('');
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      setError(err?.message?.replace('Firebase: ', '') || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      // Redirect to stored location or dashboard
      const redirectUrl = typeof window !== 'undefined' ? localStorage.getItem('redirectAfterLogin') : null
      if (redirectUrl) {
        localStorage.removeItem('redirectAfterLogin')
        router.push(redirectUrl)
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      console.error(err)
      setError(err?.message?.replace('Firebase: ', '') || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    

      <main className="min-h-screen flex items-center bg-linear-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-6xl mx-auto w-full p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-lg bg-white shadow">
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-indigo-600">Welcome Back</h2>
              <p className="mt-3 text-slate-600">Sign in to manage your events, view tickets, and access your dashboard.</p>

              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">✓</div>
                  <div>
                    <div className="font-medium">Secure access</div>
                    <div className="text-sm text-slate-600">Two-step and provider-based login available.</div>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold">★</div>
                  <div>
                    <div className="font-medium">Quick onboarding</div>
                    <div className="text-sm text-slate-600">Get started with a single click using Google.</div>
                  </div>
                </li>
              </ul>
            </div>

            <form onSubmit={handleEmailLogin} className="p-8 rounded-lg bg-white shadow">
              {error && <div className="text-sm text-red-700 bg-red-50 p-2 rounded mb-4">{error}</div>}

              <label className="text-sm">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="input input-bordered w-full mb-3" />

              <label className="text-sm">Password</label>
              <div className="relative">
                <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Your password" className="input input-bordered w-full" />
                <button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-2 top-2 btn btn-ghost btn-sm">{showPassword ? 'Hide' : 'Show'}</button>
              </div>

              <div className="flex items-center justify-between mt-3">
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="checkbox" /> Remember me</label>
                <Link href="/auth/forgot" className="text-sm text-cyan-600">Forgot password?</Link>
              </div>

              <div className="mt-4 flex gap-3">
                <button type="submit" className={`btn btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
                <button type="button" onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block mr-2">
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Google
                </button>
              </div>

              <div className="text-sm text-slate-600 mt-4">Don't have an account? <Link href="/auth/register" className="text-cyan-600 font-medium">Create one</Link></div>
            </form>
          </div>
        </div>
      </main>

      
    </>
  );
}
