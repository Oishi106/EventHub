"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { auth } from "@/app/auth/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm' : 'relative'} transition-all duration-300`}>
      <div className={`navbar rounded-3xl bg-amber-50 flex items-center justify-between`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/">
                  {" "}
                  Home{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/events">
                  Events{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/about">
                  {" "}
                  About Us{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/contract">
                  Contract{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/auth/login">
                  {" "}
                  Login{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="font-semibold text-cyan-800" href="/auth/register">
                  Register{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-[60px]" src="/logo.png" alt="" />
            <a className="btn btn-ghost text-4xl text-blue-950">
              event<span className="text-blue-500">Hub</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-3 space-x-6">
            <li>
              {" "}
              <Link className="font-semibold text-cyan-800" href="/">
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="font-semibold text-cyan-800" href="/events">
                Events{" "}
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link className="font-semibold text-cyan-800" href="/about">
                {" "}
                About Us{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="font-semibold text-cyan-800" href="/contract">
                Contract{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex items-center gap-3">
          {!loading && user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-cyan-500 ring-offset-2">
                  <img 
                    src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                    alt={user.displayName || "User"}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                <li className="menu-title">
                  <span>{user.displayName || user.email}</span>
                </li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/add-event">➕ Add New Event</a></li>
                <li><a href="/dashboard/delete-events">Manage Events</a></li>
                <li><a href="/delete-event">🗑️ Delete Events</a></li>
                <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
              </ul>
            </div>
          ) : (
            <ul className="flex gap-2">
              <li>
                <Link className="btn btn-outline border-cyan-800 text-cyan-800" href="/auth/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="btn border-cyan-800 text-white bg-cyan-500 hover:bg-cyan-600" href="/auth/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
