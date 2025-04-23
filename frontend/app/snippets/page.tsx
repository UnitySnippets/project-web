"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SnippetCard from "../components/SnippetCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

// Mock data for testing
const MOCK_CATEGORIES = [
    "Player Movement",
    "Camera Control",
    "Combat",
    "UI",
    "Physics",
    "Audio",
    "AI",
];

const MOCK_SNIPPETS = [
    {
        id: "1",
        title: "Smooth Camera Follow",
        description:
            "A smooth camera follow script that trails behind the player with configurable damping and offset.",
        category: "Camera Control",
        language: "csharp",
        createdAt: "2023-10-15T10:30:00Z",
        likesCount: 128,
        downloadsCount: 543,
    },
    {
        id: "2",
        title: "Character Controller 2D",
        description:
            "A versatile 2D character controller with support for running, jumping, wall sliding and more.",
        category: "Player Movement",
        language: "csharp",
        createdAt: "2023-09-22T08:15:00Z",
        likesCount: 235,
        downloadsCount: 1208,
    },
    {
        id: "3",
        title: "Melee Combat System",
        description:
            "Comprehensive melee combat system with combo attacks, hit detection, and damage calculation.",
        category: "Combat",
        language: "csharp",
        createdAt: "2023-11-05T14:20:00Z",
        likesCount: 189,
        downloadsCount: 876,
    },
    {
        id: "4",
        title: "Inventory System",
        description:
            "A flexible inventory system with drag and drop, item stacking, and category filtering.",
        category: "UI",
        language: "csharp",
        createdAt: "2023-10-28T09:45:00Z",
        likesCount: 167,
        downloadsCount: 932,
    },
    {
        id: "5",
        title: "Object Pooling Manager",
        description:
            "Efficient object pooling system to reduce garbage collection and improve performance.",
        category: "Physics",
        language: "csharp",
        createdAt: "2023-08-17T11:10:00Z",
        likesCount: 214,
        downloadsCount: 1542,
    },
    {
        id: "6",
        title: "3D Audio Manager",
        description:
            "Comprehensive audio management system with 3D spatial audio, mixing, and sound falloff.",
        category: "Audio",
        language: "csharp",
        createdAt: "2023-09-03T13:25:00Z",
        likesCount: 142,
        downloadsCount: 687,
    },
    {
        id: "7",
        title: "A* Pathfinding",
        description:
            "Implementation of A* pathfinding algorithm for efficient navigation in both 2D and 3D environments.",
        category: "AI",
        language: "csharp",
        createdAt: "2023-10-10T16:40:00Z",
        likesCount: 198,
        downloadsCount: 1024,
    },
    {
        id: "8",
        title: "Character Controller 3D",
        description:
            "Robust 3D character controller with first and third-person camera options, slopes, and stairs handling.",
        category: "Player Movement",
        language: "csharp",
        createdAt: "2023-11-12T08:30:00Z",
        likesCount: 256,
        downloadsCount: 1435,
    },
];

export default function SnippetsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter snippets based on search query and selected category
    const filteredSnippets = MOCK_SNIPPETS.filter((snippet) => {
        const matchesSearch =
            snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            snippet.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" || snippet.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] flex flex-col">
            <Header />

            <main className="flex-grow py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-[#cdd6f4]">Unity Snippets</h1>
                        <p className="mt-2 text-[#a6adc8]">
                            Browse our collection of Unity code snippets for your game development projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar with filters */}
                        <div className="lg:col-span-1">
                            <SearchBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                            />
                            <CategoryFilter
                                categories={MOCK_CATEGORIES}
                                selectedCategory={selectedCategory}
                                onCategoryChange={setSelectedCategory}
                            />
                        </div>

                        {/* Snippets grid */}
                        <div className="lg:col-span-3">
                            {filteredSnippets.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-[#a6adc8]">No snippets found matching your criteria.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredSnippets.map((snippet) => (
                                        <SnippetCard
                                            key={snippet.id}
                                            id={snippet.id}
                                            title={snippet.title}
                                            description={snippet.description}
                                            category={snippet.category}
                                            language={snippet.language}
                                            createdAt={snippet.createdAt}
                                            likesCount={snippet.likesCount}
                                            downloadsCount={snippet.downloadsCount}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 