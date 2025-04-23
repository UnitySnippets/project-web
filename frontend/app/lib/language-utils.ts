import { LanguageSupport, StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { EditorState, Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { codeEditorSetup } from './codemirror-theme';

export interface LanguageExtension {
    name: string;
    extension: () => LanguageSupport;
}

// Currently supported languages
const languages: Record<string, LanguageExtension> = {
    javascript: {
        name: 'JavaScript',
        extension: () => javascript({ jsx: true, typescript: false }),
    },
    typescript: {
        name: 'TypeScript',
        extension: () => javascript({ jsx: true, typescript: true }),
    },
    jsx: {
        name: 'JSX',
        extension: () => javascript({ jsx: true, typescript: false }),
    },
    tsx: {
        name: 'TSX',
        extension: () => javascript({ jsx: true, typescript: true }),
    },
    cpp: {
        name: 'C++',
        extension: () => cpp(),
    },
    csharp: {
        name: 'C#',
        // Use C++ as fallback since there's no direct C# support
        // In a production app, we would want to add proper C# support
        extension: () => cpp(),
    },
};

export function getLanguageExtension(lang: string): LanguageSupport | null {
    const language = languages[lang.toLowerCase()];
    if (!language) return null;
    return language.extension();
}

export function createEditorState(code: string, lang: string, readOnly: boolean = false) {
    const languageExtension = getLanguageExtension(lang);

    const extensions: Extension[] = [
        ...codeEditorSetup,
        EditorView.lineWrapping,
        EditorView.editable.of(!readOnly),
    ];

    if (languageExtension) {
        extensions.push(languageExtension);
    }

    return EditorState.create({
        doc: code,
        extensions,
    });
}

export function getLanguageLabel(lang: string): string {
    const language = languages[lang.toLowerCase()];
    return language ? language.name : lang.toUpperCase();
}