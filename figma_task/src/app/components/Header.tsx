"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="headergenel-container max-w-[1440px] mx-auto">
            <nav className="header-container max-w-[1440px] mx-auto">

                <div className="logo-container">
                    <img src="/logo_travlog.png" alt="Travlog Logo" className="w-6 h-6" />
                    <div className="Travlog-container">Travlog</div>
                </div>

                <button
                    className="hamburger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <GiHamburgerMenu />
                </button>

                <div
                    className={`navigation-container ${isMenuOpen ? "flex" : "hidden"
                        } sm:flex sm:flex-row  gap-14`}
                >
                    {["Home", "Discover", "Special Deals", "Contact"].map((text, index) => (
                        <Link
                            key={index}
                            href="/"
                            className="mybutton"
                        >
                            {text}
                        </Link>
                    ))}
                </div>

                <div className="auth-container">
                    <Link href="/" className="mybutton">
                        Log In
                    </Link>
                    <Link href="/" className="purplebutton sm:px-4">
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;