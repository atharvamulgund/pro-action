import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
