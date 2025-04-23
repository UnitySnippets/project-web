import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#11111b] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/snippets" className="text-[#a6adc8] hover:text-[#b4befe] transition">Snippets</Link></li>
                            <li><Link href="#pricing" className="text-[#a6adc8] hover:text-[#b4befe] transition">Pricing</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Changelog</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Roadmap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Documentation</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Tutorials</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Examples</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">About</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Team</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Careers</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Privacy</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Terms</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">License</Link></li>
                            <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#313244] flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="UnitySnippets Logo"
                            width={130}
                            height={28}
                            className="invert"
                        />
                    </div>
                    <div className="mt-4 md:mt-0 text-[#a6adc8] text-sm">
                        © {new Date().getFullYear()} UnitySnippets. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}