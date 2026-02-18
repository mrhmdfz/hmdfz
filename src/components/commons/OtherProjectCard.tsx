import { Github } from "lucide-react";
import { OtherProjectCardProps } from "@/types/project";

export default function OtherProjectCard({
  title,
  description,
  link = "#",
}: OtherProjectCardProps) {
  return (
    <div className="border border-dashed dark:border-gray-700 border-gray-200 p-6 rounded-xl dark:hover:bg-gray-900 hover:bg-blue-50/40 transition">
      <h2 className="dark:text-blue-200 text-blue-600 font-medium mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
      <button className="mt-3 cursor-pointer flex items-center gap-1 dark:text-blue-200 text-blue-600 dark:border-gray-700 border border-dashed border-gray-200 px-2 md:px-3 py-1 rounded-md hover:bg-primary dark:hover:bg-gray-800 dark:hover:text-blue-200 hover:text-blue-800  transition-all duration-300 text-xs md:text-sm">
        <a href={link} target="_blank" className="flex gap-2 items-center">
          <Github size={14} />
          View on Github
        </a>
      </button>
    </div>
  );
}
