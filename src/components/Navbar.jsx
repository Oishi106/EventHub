import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="  top-0 left-0 right-0 z-50 transition-all duration-300  backdrop-blur-sm">
      <div className="navbar shadow-sm rounded-3xl bg-amber-50 flex items-center justify-between">
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
        <div className="navbar-end hidden md:flex items-center">
          <ul className="flex">
            <li>
              {" "}
              <Link className="btn border-cyan-800 text-cyan-800" href="/auth/login">
                {" "}
                Login{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="btn border-cyan-800  text-cyan-800 bg-cyan-500" href="/auth/register">
                Register{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
