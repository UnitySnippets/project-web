"use client";

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { EditorView } from "@codemirror/view";
import { createEditorState, getLanguageLabel } from "../lib/language-utils";

interface CodeBlockProps {
    code: string;
    language: string;
    showCopyButton?: boolean;
}

export default function CodeBlock({ code, language, showCopyButton = true }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false);
    const editorRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);

    // Initialize CodeMirror
    useEffect(() => {
        if (!editorRef.current) return;

        // Create editor state with the code and language
        const state = createEditorState(code, language, true); // true = readOnly

        // Create editor view
        const view = new EditorView({
            state,
            parent: editorRef.current,
        });

        viewRef.current = view;

        // Cleanup on unmount
        return () => {
            view.destroy();
        };
    }, [code, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        toast.success("Code copied to clipboard!");

        // Reset the copied state after a short delay
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className="relative bg-[#1e1e2e] border border-[#313244] rounded-lg overflow-hidden">
            <div className="flex justify-between items-center py-2 px-4 bg-[#313244] border-b border-[#45475a]">
                <div className="flex items-center">
                    <span className="text-xs font-mono text-[#cba6f7]">
                        {getLanguageLabel(language)}
                    </span>
                </div>
                <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-[#f38ba8]" />
                    <div className="h-3 w-3 rounded-full bg-[#f9e2af]" />
                    <div className="h-3 w-3 rounded-full bg-[#a6e3a1]" />
                </div>
            </div>
            <div className="relative overflow-auto">
                <div 
                    ref={editorRef} 
                    className="cm-editor min-h-[100px] max-h-[500px]"
                    style={{ 
                        fontFamily: 'var(--font-jetbrains-mono), monospace' 
                    }}
                />
            </div>
            {showCopyButton && (
                <button
                    className="absolute top-2 right-14 text-[#a6adc8] hover:text-[#cdd6f4] p-1 rounded z-10"
                    title="Copy code"
                    onClick={handleCopy}
                >
                    {isCopied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                    )}
                </button>
            )}
        </div>
    );
}