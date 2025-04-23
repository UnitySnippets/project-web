import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#1e1e2e] border-b border-[#313244] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.svg"
                                alt="UnitySnippets Logo"
                                width={150}
                                height={32}
                                priority
                                className="invert"
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/snippets" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                            Snippets
                        </Link>
                        <Link href="#pricing" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                            Pricing
                        </Link>
                        <Link href="#docs" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                            Documentation
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] px-4 py-2 rounded-md transition duration-200"
                        >
                            Sign up
                        </Link>
                    </div>
                    <button className="md:hidden text-[#a6adc8] hover:text-[#b4befe]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}