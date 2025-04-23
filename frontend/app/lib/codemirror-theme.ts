import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';
import { HighlightStyle, syntaxHighlighting as cmSyntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';

// Theme colors based on the existing app palette
export const unitySnippetsTheme = EditorView.theme({
    '&': {
        backgroundColor: '#1e1e2e',
        color: '#cdd6f4',
        fontFamily: 'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '14px',
        lineHeight: '1.5',
        height: 'auto',
    },
    '.cm-content': {
        padding: '8px 0',
        caretColor: '#f5c2e7'
    },
    '.cm-line': {
        padding: '0 8px'
    },
    '&.cm-focused': {
        outline: 'none',
    },
    '&.cm-focused .cm-cursor': {
        borderLeftColor: '#f5c2e7'
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: 'rgba(137, 180, 250, 0.3)'
    },
    '.cm-activeLine': {
        backgroundColor: 'rgba(49, 50, 68, 0.5)'
    },
    '.cm-gutters': {
        backgroundColor: '#313244',
        color: '#a6adc8',
        border: 'none',
        paddingRight: '8px'
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
        padding: '0 8px 0 4px'
    },
    '.cm-activeLineGutter': {
        backgroundColor: 'rgba(49, 50, 68, 0.8)'
    },
}, { dark: true });

// Syntax highlighting
export const unitySnippetsHighlightStyle = HighlightStyle.define([
    { tag: t.keyword, color: '#cba6f7' },
    { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '#89b4fa' },
    { tag: [t.function(t.variableName), t.labelName], color: '#89b4fa' },
    { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#fab387' },
    { tag: [t.definition(t.name), t.separator], color: '#cdd6f4' },
    { tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#f38ba8' },
    { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '#f9e2af' },
    { tag: [t.meta, t.comment], color: '#a6adc8' },
    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.strikethrough, textDecoration: 'line-through' },
    { tag: t.link, color: '#a6e3a1', textDecoration: 'underline' },
    { tag: t.heading, fontWeight: 'bold', color: '#89b4fa' },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#fab387' },
    { tag: [t.processingInstruction, t.string, t.inserted], color: '#a6e3a1' },
    { tag: t.invalid, color: '#f38ba8' },
]);

// Create a proper extension instance from the highlight style
export const highlightStyleExtension = cmSyntaxHighlighting(unitySnippetsHighlightStyle);

// Bundle our theme extensions
export const codeEditorSetup: Extension[] = [
    unitySnippetsTheme,
    highlightStyleExtension,
];