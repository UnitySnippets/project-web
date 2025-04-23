"use client";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    return (
        <div className="mb-6">
            <h3 className="text-[#cdd6f4] font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => onCategoryChange("all")}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedCategory === "all"
                        ? "bg-[#cba6f7] text-[#1e1e2e]"
                        : "bg-[#313244] text-[#a6adc8] hover:bg-[#45475a]"
                        }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedCategory === category
                            ? "bg-[#cba6f7] text-[#1e1e2e]"
                            : "bg-[#313244] text-[#a6adc8] hover:bg-[#45475a]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}