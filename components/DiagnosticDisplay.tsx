import ReactMarkdown from "react-markdown";

type Props = {
  markdown: string;
};

export function DiagnosticDisplay({ markdown }: Props) {
  return (
    <article className="diagnostic-output rounded-xl border border-line bg-white p-6 sm:p-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}
