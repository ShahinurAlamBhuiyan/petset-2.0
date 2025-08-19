"use client";

import { useState } from "react";
import logo from "@/assets/petsetlogo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Props = {};
const NavBar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#181818]">
            <div className="custom-container !py-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image width={165} height={50} alt="PetSet Logo" src={logo} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 text-white font-bold text-lg lg:ml-[-10%]">
                    <Link href="/" className="hover:underline hover:text-primaryOrange">
                        Home
                    </Link>
                    <Link
                        href="/memories"
                        className="hover:underline hover:text-primaryOrange"
                    >
                        Memories
                    </Link>
                    <Link
                        href="/adoptions"
                        className="hover:underline hover:text-primaryOrange"
                    >
                        Adoptions
                    </Link>
                    <Link
                        href="/services"
                        className="hover:underline hover:text-primaryOrange"
                    >
                        Health Care
                    </Link>
                    <Link
                        href="/stores"
                        className="hover:underline hover:text-primaryOrange"
                    >
                        Store
                    </Link>
                    <Link
                        href="/hostels"
                        className="hover:underline hover:text-primaryOrange"
                    >
                        Hostel
                    </Link>
                </div>

                {/* Desktop Button */}
                <button className="hidden lg:block custom-button">Login</button>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 px-6 pb-6 text-white font-bold lg:text-lg bg-[#181818]">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/memories" onClick={() => setIsOpen(false)}>
                        Memories
                    </Link>
                    <Link href="/adoptions" onClick={() => setIsOpen(false)}>
                        Adoptions
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>
                        Health Care
                    </Link>
                    <Link href="/stores" onClick={() => setIsOpen(false)}>
                        Store
                    </Link>
                    <Link href="/hostels" onClick={() => setIsOpen(false)}>
                        Hostel
                    </Link>
                    <button className="custom-button mt-2">Login</button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
