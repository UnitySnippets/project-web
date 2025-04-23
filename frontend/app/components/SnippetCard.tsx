import Link from "next/link";

interface SnippetCardProps {
    id: string;
    title: string;
    description: string;
    category: string;
    language: string;
    createdAt: string;
    likesCount: number;
    downloadsCount: number;
}

export default function SnippetCard({
    id,
    title,
    description,
    category,
    language,
    createdAt,
    likesCount,
    downloadsCount,
}: SnippetCardProps) {
    // Format date
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link
            href={`/snippets/${id}`}
            className="block bg-[#313244] rounded-lg border border-[#45475a] hover:border-[#cba6f7] transition-colors p-5"
        >
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#cba6f7]/20 text-[#cba6f7]">
                            {category}
                        </span>
                        <span className="ml-2 px-2 py-1 text-xs rounded-full bg-[#89b4fa]/20 text-[#89b4fa]">
                            {language}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#cdd6f4]">{title}</h3>
                    <p className="mt-2 text-[#a6adc8] line-clamp-2">{description}</p>
                </div>

                <div className="flex justify-between items-center text-sm text-[#a6adc8]">
                    <div>{formattedDate}</div>
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span>{likesCount}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>{downloadsCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}