import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Markdown'ı HTML'e çeviren basit parser
  const parseMarkdown = (text: string): string => {
    let html = text;

    // H1 Headers (# )
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h1>');

    // H2 Headers (## )
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>');

    // H3 Headers (### )
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800">$1</h3>');

    // Bold (**text** or __text__)
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong class="font-bold">$1</strong>');

    // Italic (*text* or _text_)
    html = html.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
    html = html.replace(/_(.+?)_/g, '<em class="italic">$1</em>');

    // Links [text](url)
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-teal hover:underline font-semibold">$1</a>');

    // Unordered Lists (- item)
    html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>');

    // Ordered Lists (1. item)
    html = html.replace(/^\d+\.\s(.+)$/gm, '<li class="ml-6 list-decimal">$1</li>');

    // Wrap consecutive list items in ul/ol
    html = html.replace(/(<li class="ml-6 list-disc">.+?<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>');
    html = html.replace(/(<li class="ml-6 list-decimal">.+?<\/li>\n?)+/g, '<ol class="space-y-2 my-4">$&</ol>');

    // Checkboxes (✅ ❌ ⏳ ⚠️)
    html = html.replace(/^(✅|❌|⏳|⚠️)\s(.+)$/gm, '<div class="flex items-start gap-2 my-2"><span class="text-xl">$1</span><span>$2</span></div>');

    // Paragraphs (double newline)
    const lines = html.split('\n');
    const paragraphs: string[] = [];
    let currentParagraph: string[] = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed === '') {
        if (currentParagraph.length > 0) {
          const p = currentParagraph.join(' ');
          // Sadece normal metinleri p tag'ine sar
          if (!p.startsWith('<') && p.length > 0) {
            paragraphs.push(`<p class="mb-4 leading-relaxed">${p}</p>`);
          } else {
            paragraphs.push(p);
          }
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(trimmed);
      }
    });

    // Son paragrafı ekle
    if (currentParagraph.length > 0) {
      const p = currentParagraph.join(' ');
      if (!p.startsWith('<') && p.length > 0) {
        paragraphs.push(`<p class="mb-4 leading-relaxed">${p}</p>`);
      } else {
        paragraphs.push(p);
      }
    }

    html = paragraphs.join('\n');

    // Line breaks (tek newline → <br />)
    // html = html.replace(/\n/g, '<br />');

    return html;
  };

  return (
    <div
      className="prose prose-lg max-w-none text-gray-800"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
