import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CodeBlock from './components/CodeBlock';

// Example Unity C# camera follow script for the hero section
const cameraFollowCode = `using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target;
    public Vector3 offset = new Vector3(0, 5, -10);
    public float smoothSpeed = 0.125f;
    
    void LateUpdate()
    {
        if (target == null)
            return;
            
        Vector3 desiredPosition = target.position + offset;
        Vector3 smoothedPosition = Vector3.Lerp(
            transform.position, 
            desiredPosition, 
            smoothSpeed
        );
        
        transform.position = smoothedPosition;
        transform.LookAt(target);
    }
}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#f5c2e7] via-[#cba6f7] to-[#89b4fa] text-transparent bg-clip-text">
              Unity Snippets Library
            </h1>
            <p className="text-xl mb-8 text-[#a6adc8]">
              Browse, share, and download code snippets to accelerate your Unity game development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/snippets" 
                className="px-6 py-3 bg-[#cba6f7] text-[#1e1e2e] font-medium rounded-lg hover:bg-[#f5c2e7] transition-colors duration-300"
              >
                Browse Snippets
              </Link>
              <Link 
                href="/api/auth/signin" 
                className="px-6 py-3 bg-[#313244] text-[#cdd6f4] font-medium rounded-lg border border-[#45475a] hover:bg-[#45475a] transition-colors duration-300"
              >
                Sign In to Contribute
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <CodeBlock code={cameraFollowCode} language="csharp" />
          </div>
        </div>
        
        {/* Mobile version of code block */}
        <div className="md:hidden mt-8">
          <CodeBlock code={cameraFollowCode} language="csharp" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#cdd6f4]">
          Why Use Unity Snippets?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#313244] p-6 rounded-lg border border-[#45475a]">
            <div className="w-12 h-12 bg-[#f5c2e7]/20 flex items-center justify-center rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#f5c2e7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ready-to-Use Code</h3>
            <p className="text-[#a6adc8]">
              Find and implement solutions quickly with thoroughly tested code snippets that solve common game development challenges.
            </p>
          </div>
          
          <div className="bg-[#313244] p-6 rounded-lg border border-[#45475a]">
            <div className="w-12 h-12 bg-[#cba6f7]/20 flex items-center justify-center rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#cba6f7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-[#a6adc8]">
              Join a growing community of Unity developers sharing their knowledge and best practices through quality code snippets.
            </p>
          </div>
          
          <div className="bg-[#313244] p-6 rounded-lg border border-[#45475a]">
            <div className="w-12 h-12 bg-[#89b4fa]/20 flex items-center justify-center rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#89b4fa]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn & Improve</h3>
            <p className="text-[#a6adc8]">
              Study well-written code examples to enhance your programming skills and understand Unity best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#313244] rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#cdd6f4]">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Camera', icon: '📷' },
            { name: 'Controller', icon: '🎮' },
            { name: 'AI', icon: '🤖' },
            { name: 'UI', icon: '🖥️' },
            { name: 'Systems', icon: '⚙️' },
            { name: 'Optimization', icon: '⚡' },
            { name: 'Physics', icon: '🧲' },
            { name: 'Animation', icon: '🎬' },
            { name: 'Audio', icon: '🔊' },
            { name: 'Shaders', icon: '🌈' },
            { name: 'Utility', icon: '🔧' },
            { name: 'Networking', icon: '🌐' },
          ].map((category) => (
            <Link 
              key={category.name}
              href={`/snippets?category=${category.name}`}
              className="flex flex-col items-center justify-center p-4 bg-[#1e1e2e] rounded-lg border border-[#45475a] hover:border-[#89b4fa] transition-colors"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#f5c2e7]/20 via-[#cba6f7]/20 to-[#89b4fa]/20 p-8 sm:p-12 rounded-lg border border-[#45475a]">
          <h2 className="text-3xl font-bold mb-4 text-[#cdd6f4]">
            Ready to Contribute?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#a6adc8]">
            Share your own Unity code snippets with the community and help other developers level up their games.
          </p>
          <Link 
            href="/api/auth/signin" 
            className="px-8 py-3 bg-[#89b4fa] text-[#1e1e2e] font-medium rounded-lg hover:bg-[#b4befe] transition-colors duration-300 inline-block"
          >
            Sign In to Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}