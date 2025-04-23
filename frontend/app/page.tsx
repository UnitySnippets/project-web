import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#1e1e2e] text-[#cdd6f4]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.svg"
            alt="Background pattern"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        {/* Header */}
        <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="UnitySnippets Logo"
                width={150}
                height={32}
                priority
                className="invert"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                Features
              </Link>
              <Link href="#examples" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                Examples
              </Link>
              <Link href="#docs" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                Documentation
              </Link>
              <Link href="#pricing" className="text-[#a6adc8] hover:text-[#b4befe] transition duration-200">
                Pricing
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
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#cdd6f4]">
                Unity Game Development
                <span className="text-[#cba6f7]"> Simplified</span>
              </h1>
              <p className="mt-6 text-lg text-[#a6adc8] max-w-2xl">
                Access a growing library of ready-to-use Unity snippets, save development time,
                and build better games faster. Perfect for indie developers and studios alike.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/snippets"
                  className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] px-8 py-3 rounded-md text-center transition duration-200 flex-1 sm:flex-none"
                >
                  Browse Snippets
                </Link>
                <Link
                  href="/docs"
                  className="border border-[#45475a] hover:border-[#b4befe] hover:text-[#b4befe] px-8 py-3 rounded-md text-center transition duration-200 flex-1 sm:flex-none"
                >
                  View Documentation
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-[#313244] bg-[#45475a]"
                    />
                  ))}
                </div>
                <p className="ml-4 text-sm text-[#a6adc8]">
                  <span className="font-semibold text-[#cdd6f4]">500+</span> developers using our snippets
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg h-64 md:h-96 bg-gradient-to-br from-[#cba6f7]/20 to-[#89b4fa]/20 backdrop-blur-md rounded-lg p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#cba6f7]/10 to-[#89b4fa]/10 rounded-lg" />
                <div className="absolute inset-0.5 bg-[#1e1e2e] rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-[#cba6f7]/10 rounded px-2 py-1 text-xs font-mono text-[#cba6f7]">
                        PlayerMovement.cs
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 rounded-full bg-[#f38ba8]" />
                        <div className="h-3 w-3 rounded-full bg-[#f9e2af]" />
                        <div className="h-3 w-3 rounded-full bg-[#a6e3a1]" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm font-mono text-[#cdd6f4] overflow-hidden">
                      <p><span className="text-[#f5c2e7]">using</span> UnityEngine;</p>
                      <p>&nbsp;</p>
                      <p><span className="text-[#89b4fa]">public class</span> <span className="text-[#a6e3a1]">PlayerMovement</span> : MonoBehaviour</p>
                      <p>&#123;</p>
                      <p>&nbsp;&nbsp;<span className="text-[#89b4fa]">public float</span> moveSpeed = 5f;</p>
                      <p>&nbsp;&nbsp;<span className="text-[#89b4fa]">public float</span> jumpForce = 5f;</p>
                      <p>&nbsp;&nbsp;<span className="text-[#89b4fa]">private</span> Rigidbody2D rb;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;&nbsp;<span className="text-[#89b4fa]">void</span> Start() &#123;</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;rb = GetComponent&lt;Rigidbody2D&gt;();</p>
                      <p>&nbsp;&nbsp;&#125;</p>
                      <p>&#125;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section id="features" className="py-20 bg-[#181825]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#cdd6f4]">
              Everything You Need for Unity Development
            </h2>
            <p className="mt-4 text-lg text-[#a6adc8] max-w-2xl mx-auto">
              Our snippets library covers all aspects of Unity game development,
              from basic mechanics to advanced systems.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#313244] p-6 rounded-lg shadow-sm border border-[#45475a]"
              >
                <div className="w-12 h-12 bg-[#cba6f7]/10 rounded-lg flex items-center justify-center text-[#cba6f7] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#cdd6f4]">{feature.title}</h3>
                <p className="mt-2 text-[#a6adc8]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#11111b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Features</Link></li>
                <li><Link href="#" className="text-[#a6adc8] hover:text-[#b4befe] transition">Pricing</Link></li>
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
    </div>
  );
}

// Features data
const features = [
  {
    title: "Game Mechanics",
    description: "Ready-to-use scripts for common game mechanics like player movement, combat systems, and inventory management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
  },
  {
    title: "UI Components",
    description: "Customizable UI elements and systems that integrate seamlessly with Unity's UI toolkit and TextMeshPro.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Optimization Tools",
    description: "Performance optimization scripts and tools to ensure your games run smoothly across all platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "AI & Behaviors",
    description: "Advanced AI systems including pathfinding, state machines, and behavior trees for creating complex, responsive NPCs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Save Systems",
    description: "Reliable save & load systems with encryption, cloud synchronization, and fallback mechanisms for data safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    description: "Scripts and tools designed to work across all platforms Unity supports, from mobile to VR/AR to consoles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
      </svg>
    ),
  },
];