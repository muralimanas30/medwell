import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ markdown }) => {
    // Fallback to plain text if markdown is empty or invalid
    const safeMarkdown = markdown || "No response available.";

    return (
        <div className="text-neutral rose max-w-full">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{safeMarkdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;