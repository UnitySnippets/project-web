"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CodeBlock from "../../components/CodeBlock";

// Mock data for a snippet
const MOCK_SNIPPETS = {
    "1": {
        id: "1",
        title: "Smooth Camera Follow",
        description:
            "A smooth camera follow script that trails behind the player with configurable damping and offset. Perfect for platformers and top-down games where you want the camera to smoothly follow the player.",
        category: "Camera Control",
        language: "csharp",
        createdAt: "2023-10-15T10:30:00Z",
        updatedAt: "2023-11-02T14:45:00Z",
        author: "GameDevPro",
        likesCount: 128,
        downloadsCount: 543,
        tags: ["camera", "follow", "smooth", "2D", "3D"],
        readme: "## Smooth Camera Follow\n\nThis script provides a smooth camera follow functionality with configurable parameters.\n\n### Features\n- Adjustable follow speed (damping)\n- Configurable offset from target\n- Works in both 2D and 3D projects\n- Option to follow only on specific axes\n\n### How to Use\n1. Attach this script to your camera\n2. Assign your player or target to the 'target' field\n3. Adjust the parameters as needed\n\n### Tips\n- For a tighter follow, increase the smoothSpeed value\n- For a more cinematic feel, use a lower smoothSpeed",
        code: `using UnityEngine;

public class SmoothCameraFollow : MonoBehaviour
{
    [Header("Target Settings")]
    public Transform target;
    public Vector3 offset = new Vector3(0, 2, -10);
    
    [Header("Follow Settings")]
    [Range(0.01f, 10f)]
    public float smoothSpeed = 0.125f;
    
    [Header("Constraints")]
    public bool followX = true;
    public bool followY = true;
    public bool followZ = true;
    
    private Vector3 velocity = Vector3.zero;
    
    void LateUpdate()
    {
        if (target == null)
            return;
            
        // Calculate the desired position
        Vector3 desiredPosition = target.position + offset;
        
        // Apply constraints if any
        if (!followX) desiredPosition.x = transform.position.x;
        if (!followY) desiredPosition.y = transform.position.y;
        if (!followZ) desiredPosition.z = transform.position.z;
        
        // Smoothly move the camera towards the desired position
        transform.position = Vector3.SmoothDamp(
            transform.position, 
            desiredPosition, 
            ref velocity, 
            smoothSpeed
        );
        
        // Optional: Make the camera look at the target
        // transform.LookAt(target);
    }
}`,
        unity_version: "2020.3+",
        license: "MIT",
        related_snippets: ["2", "8"],
    },
    "2": {
        id: "2",
        title: "Character Controller 2D",
        description:
            "A versatile 2D character controller with support for running, jumping, wall sliding and more.",
        category: "Player Movement",
        language: "csharp",
        createdAt: "2023-09-22T08:15:00Z",
        updatedAt: "2023-10-05T11:30:00Z",
        author: "Unity2DExpert",
        likesCount: 235,
        downloadsCount: 1208,
        tags: ["2D", "character", "controller", "platformer", "movement"],
        readme: "## 2D Character Controller\n\nA comprehensive controller for 2D platformers.\n\n### Features\n- Pixel-perfect movement\n- Variable jump height\n- Coyote time for better jump feel\n- Wall sliding and wall jumping\n- One-way platforms\n- Ground detection\n\n### Setup\n1. Add a Rigidbody2D to your character (set to Kinematic)\n2. Add a Collider2D (usually a CapsuleCollider2D works best)\n3. Attach this script\n4. Configure the parameters",
        code: `using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class CharacterController2D : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 8f;
    public float jumpForce = 16f;
    public float wallSlideSpeed = 2f;
    
    [Header("Ground Detection")]
    public Transform groundCheck;
    public float groundCheckRadius = 0.2f;
    public LayerMask groundLayer;
    
    [Header("Wall Detection")]
    public Transform wallCheck;
    public float wallCheckDistance = 0.5f;
    
    [Header("Jump Settings")]
    public float coyoteTime = 0.2f;
    public float jumpBufferTime = 0.2f;
    
    private Rigidbody2D rb;
    private bool isGrounded;
    private bool isTouchingWall;
    private bool isWallSliding;
    private float coyoteTimeCounter;
    private float jumpBufferCounter;
    private float horizontalInput;
    private bool facingRight = true;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    
    void Update()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
        
        // Ground check
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayer);
        
        // Wall check
        isTouchingWall = Physics2D.Raycast(wallCheck.position, Vector2.right * (facingRight ? 1 : -1), wallCheckDistance, groundLayer);
        
        // Handle coyote time
        if (isGrounded)
        {
            coyoteTimeCounter = coyoteTime;
        }
        else
        {
            coyoteTimeCounter -= Time.deltaTime;
        }
        
        // Jump buffer
        if (Input.GetButtonDown("Jump"))
        {
            jumpBufferCounter = jumpBufferTime;
        }
        else
        {
            jumpBufferCounter -= Time.deltaTime;
        }
        
        // Jump logic
        if (jumpBufferCounter > 0f && coyoteTimeCounter > 0f)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            jumpBufferCounter = 0f;
        }
        
        // Wall sliding
        if (isTouchingWall && !isGrounded && horizontalInput != 0)
        {
            isWallSliding = true;
        }
        else
        {
            isWallSliding = false;
        }
        
        // Flip character
        if (horizontalInput > 0 && !facingRight)
        {
            Flip();
        }
        else if (horizontalInput < 0 && facingRight)
        {
            Flip();
        }
    }
    
    void FixedUpdate()
    {
        // Movement
        rb.velocity = new Vector2(horizontalInput * moveSpeed, rb.velocity.y);
        
        // Wall sliding
        if (isWallSliding)
        {
            rb.velocity = new Vector2(rb.velocity.x, Mathf.Max(rb.velocity.y, -wallSlideSpeed));
        }
    }
    
    void Flip()
    {
        facingRight = !facingRight;
        Vector3 scale = transform.localScale;
        scale.x *= -1;
        transform.localScale = scale;
    }
}`,
        unity_version: "2019.4+",
        license: "MIT",
        related_snippets: ["8"],
    },
    // More snippets would be defined here
};

export default function SnippetDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const [snippet, setSnippet] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, this would be an API call
        // For now, we'll use our mock data
        setLoading(true);

        // Simulate API call delay
        const timer = setTimeout(() => {
            const foundSnippet = MOCK_SNIPPETS[id as keyof typeof MOCK_SNIPPETS];
            setSnippet(foundSnippet || null);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] flex flex-col">
                <Header />
                <main className="flex-grow py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-[#313244] rounded w-1/3 mb-4"></div>
                            <div className="h-4 bg-[#313244] rounded w-2/3 mb-6"></div>
                            <div className="h-64 bg-[#313244] rounded mb-8"></div>
                            <div className="h-4 bg-[#313244] rounded w-full mb-2"></div>
                            <div className="h-4 bg-[#313244] rounded w-full mb-2"></div>
                            <div className="h-4 bg-[#313244] rounded w-2/3"></div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!snippet) {
        return (
            <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] flex flex-col">
                <Header />
                <main className="flex-grow py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold mb-4">Snippet Not Found</h1>
                        <p className="text-[#a6adc8] mb-8">
                            The snippet you are looking for doesn't exist or has been removed.
                        </p>
                        <Link
                            href="/snippets"
                            className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] px-4 py-2 rounded-md transition duration-200"
                        >
                            Browse Other Snippets
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Format dates
    const createdDate = new Date(snippet.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const updatedDate = new Date(snippet.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] flex flex-col">
            <Header />

            <main className="flex-grow py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Navigation */}
                    <div className="mb-6">
                        <Link
                            href="/snippets"
                            className="text-[#a6adc8] hover:text-[#b4befe] transition inline-flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Back to Snippets
                        </Link>
                    </div>

                    {/* Snippet header */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-[#cba6f7]/20 text-[#cba6f7]">
                                {snippet.category}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-[#89b4fa]/20 text-[#89b4fa]">
                                {snippet.language === "csharp" ? "C#" : snippet.language}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-[#a6e3a1]/20 text-[#a6e3a1]">
                                Unity {snippet.unity_version}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-[#f5c2e7]/20 text-[#f5c2e7]">
                                {snippet.license} License
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-[#cdd6f4]">{snippet.title}</h1>

                        <div className="mt-2 flex items-center text-[#a6adc8]">
                            <span>By {snippet.author}</span>
                            <span className="mx-2">•</span>
                            <span>Created: {createdDate}</span>
                            <span className="mx-2">•</span>
                            <span>Updated: {updatedDate}</span>
                        </div>

                        <p className="mt-4 text-[#a6adc8]">{snippet.description}</p>

                        <div className="mt-4 flex items-center space-x-6">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[#cba6f7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span>{snippet.likesCount} likes</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[#89b4fa]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span>{snippet.downloadsCount} downloads</span>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2 text-[#cdd6f4]">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {snippet.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-sm rounded-full bg-[#313244] text-[#a6adc8]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Code block */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2 text-[#cdd6f4]">Source Code</h3>
                        <CodeBlock code={snippet.code} language={snippet.language} />

                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-[#cba6f7] hover:bg-[#b4befe] text-[#1e1e2e] px-4 py-2 rounded-md transition duration-200 flex items-center"
                                onClick={() => {
                                    // In a real app, this would increment download count via API call
                                    navigator.clipboard.writeText(snippet.code);
                                    // You would also show a toast notification here
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                Download
                            </button>

                            <button
                                className="bg-transparent border border-[#45475a] hover:border-[#b4befe] text-[#cdd6f4] hover:text-[#b4befe] px-4 py-2 rounded-md transition duration-200 flex items-center"
                                onClick={() => {
                                    // In a real app, this would toggle like status via API call
                                    // You would also show a toast notification here
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                Like
                            </button>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2 text-[#cdd6f4]">Documentation</h3>
                        <div className="bg-[#313244] rounded-lg p-6 prose prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: snippet.readme.replace(/\n/g, '<br />') }} />
                        </div>
                    </div>

                    {/* Related snippets - would be expanded in a real app */}
                    {snippet.related_snippets && snippet.related_snippets.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-[#cdd6f4]">Related Snippets</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {snippet.related_snippets.map((relId: string) => {
                                    const relSnippet = MOCK_SNIPPETS[relId as keyof typeof MOCK_SNIPPETS];
                                    if (!relSnippet) return null;

                                    return (
                                        <Link
                                            key={relId}
                                            href={`/snippets/${relId}`}
                                            className="block bg-[#313244] rounded-lg border border-[#45475a] hover:border-[#cba6f7] transition-colors p-5"
                                        >
                                            <div>
                                                <span className="px-2 py-1 text-xs rounded-full bg-[#cba6f7]/20 text-[#cba6f7] mb-2 inline-block">
                                                    {relSnippet.category}
                                                </span>
                                                <h3 className="text-xl font-semibold text-[#cdd6f4]">{relSnippet.title}</h3>
                                                <p className="mt-2 text-[#a6adc8] line-clamp-2">{relSnippet.description}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
} 