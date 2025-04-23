"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SnippetCard from "../components/SnippetCard";

// Mock data for snippets
const SNIPPETS_DATA = [
    {
        id: "1",
        title: "Unity Camera Follow Script",
        description: "A smooth camera follow script that follows the player with adjustable damping and offset.",
        category: "Camera",
        language: "csharp",
        createdAt: "2025-03-15T10:30:00Z",
        likesCount: 42,
        downloadsCount: 128,
    },
    {
        id: "2",
        title: "Player Movement Controller",
        description: "A complete player controller with smooth movement, jumping, and ground detection.",
        category: "Controller",
        language: "csharp",
        createdAt: "2025-03-10T14:20:00Z",
        likesCount: 63,
        downloadsCount: 211,
    },
    {
        id: "3",
        title: "Object Pooling System",
        description: "Efficient object pooling system for spawning and reusing objects without the performance cost of instantiating and destroying GameObjects.",
        category: "Optimization",
        language: "csharp",
        createdAt: "2025-03-05T09:15:00Z",
        likesCount: 87,
        downloadsCount: 345,
    },
    {
        id: "4",
        title: "Save System with JSON",
        description: "Save and load game data using JSON serialization with PlayerPrefs or file system storage.",
        category: "Utility",
        language: "csharp",
        createdAt: "2025-02-28T16:40:00Z",
        likesCount: 35,
        downloadsCount: 163,
    },
    {
        id: "5",
        title: "Simple Enemy AI",
        description: "A modular enemy AI that follows and attacks the player with configurable detection ranges and behaviors.",
        category: "AI",
        language: "csharp",
        createdAt: "2025-02-20T11:10:00Z",
        likesCount: 51,
        downloadsCount: 192,
    },
    {
        id: "6",
        title: "Inventory System",
        description: "A flexible inventory system with item stacking, categories, and UI integration.",
        category: "Systems",
        language: "csharp",
        createdAt: "2025-02-15T08:25:00Z",
        likesCount: 68,
        downloadsCount: 237,
    },
];

// Get unique categories from snippets
const CATEGORIES = [...new Set(SNIPPETS_DATA.map((snippet) => snippet.category))];

export default function SnippetsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredSnippets, setFilteredSnippets] = useState(SNIPPETS_DATA);

    useEffect(() => {
        let filtered = SNIPPETS_DATA;

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(
                (snippet) =>
                    snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    snippet.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = filtered.filter((snippet) => snippet.category === selectedCategory);
        }

        setFilteredSnippets(filtered);
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Unity Snippets</h1>
                    <p className="text-[#a6adc8]">
                        Browse and search through our collection of Unity code snippets to speed up your
                        game development workflow.
                    </p>
                </div>

                <div className="lg:flex gap-8">
                    <div className="lg:w-1/4 mb-8 lg:mb-0">
                        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                        <CategoryFilter
                            categories={CATEGORIES}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />
                    </div>

                    <div className="lg:w-3/4">
                        {filteredSnippets.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredSnippets.map((snippet) => (
                                    <SnippetCard key={snippet.id} {...snippet} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-[#313244] rounded-lg p-8 text-center border border-[#45475a]">
                                <h3 className="text-xl font-semibold mb-2">No snippets found</h3>
                                <p className="text-[#a6adc8]">
                                    Try adjusting your search or category filters to find what you&apos;re looking
                                    for.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}