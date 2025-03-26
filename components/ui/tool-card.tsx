import React from "react";

interface ToolCardProps {
  title: string;
  description: string;
  poweredBy?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, poweredBy }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white-50 p-6 transition-all duration-300 hover:shadow-lg dark:border-black/50 dark:bg-gray-800">
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      {poweredBy && (
        <div className="text-sm text-gray-500">
          Powered by <span className="font-medium">{poweredBy}</span>
        </div>
      )}
    </div>
  );
};

export default ToolCard;