"use client";

import Image from "next/image";

import { Heart } from "lucide-react";


import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
        <header className="py-4 md:py-6 px-4 md:px-8 ">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-32 h-12 md:w-40 md:h-16">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        fill
                        className="object-contain cursor-pointer"
                        priority
                        onClick={() => router.push("/")}
                    />
                </div>

                <button onClick={() => {
                    router.push("/favorites")
                }} className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border-2 border-[#00b5cc] text-[#00b5cc] font-medium hover:bg-[#00b5cc] hover:text-white transition-colors text-sm md:text-base">
                    <Heart size={18} />
                    <span className="hidden sm:inline">Favorites list</span>
                    <span className="sm:hidden">Favorites</span>
                </button>
            </div>
        </header>
    )
};

export default Header;