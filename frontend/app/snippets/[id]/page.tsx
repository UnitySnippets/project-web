import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CodeBlock from '../../components/CodeBlock';

async function getSnippetById(id: string) {
    // This would typically be a fetch to your API
    // For now, returning mock data
    return {
        id,
        title: 'Unity Camera Follow Script',
        description: 'A smooth camera follow script that follows the player with adjustable damping and offset.',
        content: `using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target;
    [SerializeField] private Vector3 offset = new Vector3(0, 2, -5);
    [SerializeField] private float smoothSpeed = 0.125f;

    private void LateUpdate()
    {
        if (target == null) return;

        Vector3 desiredPosition = target.position + offset;
        Vector3 smoothedPosition = Vector3.Lerp(transform.position, desiredPosition, smoothSpeed);
        transform.position = smoothedPosition;

        transform.LookAt(target);
    }
}`,
        language: 'csharp',
        category: 'Camera',
        author: 'Unity Developer',
        createdAt: '2025-03-15T10:30:00Z',
        updatedAt: '2025-03-15T10:30:00Z',
        likesCount: 42,
        downloadsCount: 128,
        tags: ['camera', 'follow', 'smooth', 'player']
    };
}

export default async function SnippetPage({ params }: { params: { id: string } }) {
    const snippet = await getSnippetById(params.id);

    return (
        <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-6">
                    <Link 
                        href="/snippets" 
                        className="flex items-center text-[#89b4fa] hover:text-[#b4befe] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to snippets
                    </Link>
                </div>

                <div className="bg-[#313244] rounded-lg p-6 shadow-lg mb-8 border border-[#45475a]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#cdd6f4] mb-2">{snippet.title}</h1>
                            <p className="text-[#a6adc8] mb-4">{snippet.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 text-xs rounded-full bg-[#cba6f7]/20 text-[#cba6f7]">
                                    {snippet.category}
                                </span>
                                <span className="px-2 py-1 text-xs rounded-full bg-[#89b4fa]/20 text-[#89b4fa]">
                                    {snippet.language === 'csharp' ? 'C#' : snippet.language}
                                </span>
                                {snippet.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[#45475a] text-[#a6adc8]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <button className="flex items-center space-x-1 text-[#a6adc8] hover:text-[#cdd6f4] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span>{snippet.likesCount}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-[#a6adc8] hover:text-[#cdd6f4] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span>{snippet.downloadsCount}</span>
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <CodeBlock code={snippet.content} language={snippet.language} />
                    </div>

                    <div className="flex items-center justify-between text-sm text-[#a6adc8]">
                        <div>By {snippet.author}</div>
                        <div>
                            Created {new Date(snippet.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

                <div className="bg-[#313244] rounded-lg p-6 shadow-lg border border-[#45475a]">
                    <h2 className="text-xl font-semibold mb-4">How to Use</h2>
                    <ol className="list-decimal list-inside space-y-4 text-[#a6adc8]">
                        <li>Create a new C# script in your Unity project named <code className="bg-[#1e1e2e] px-1 py-0.5 rounded">CameraFollow.cs</code></li>
                        <li>Copy and paste the code above into the script</li>
                        <li>Attach the script to your camera</li>
                        <li>Assign the player or object to follow as the <code className="bg-[#1e1e2e] px-1 py-0.5 rounded">target</code></li>
                        <li>Adjust the <code className="bg-[#1e1e2e] px-1 py-0.5 rounded">offset</code> and <code className="bg-[#1e1e2e] px-1 py-0.5 rounded">smoothSpeed</code> values to your liking</li>
                    </ol>
                </div>
            </main>
            <Footer />
        </div>
    );
}
