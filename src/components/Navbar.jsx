import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>




            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <Link className='' href="/"> Home </Link> </li>
                            <li> <Link className='' href="/products">Products </Link> </li>
                            <li> <Link className='' href="/about"> About Us </Link> </li>
                            <li> <Link className='' href="/auth/login"> Login </Link> </li>
                            <li> <Link className='' href="/auth/register">Register </Link> </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 space-x-6">
                      <li> <Link className='' href="/">Home</Link> </li>
                      <li> <Link className='' href="/products">Products </Link> </li>
                      <li> <Link className='' href="/about"> About Us </Link> </li>
                      <li> <Link className='' href="/auth/login"> Login </Link> </li>
                      <li> <Link className='' href="/auth/register">Register </Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}


