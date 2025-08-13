"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link href="/">Homepage</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <p className="text-xl">Einar Birgisson</p>
        </div>
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m10-10H2"
                    />
                </svg>
                </label>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                <li>
                    <Link href="https://instagram.com" target="_blank">Instagram</Link>
                </li>
                <li>
                    <Link href="https://facebook.com" target="_blank">Facebook</Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
