"use client";

import React from "react";

const ToolsComponent: React.FC = () => {
  return (
    <section className="mt-36">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold">PearAI Tools</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="text-xl font-semibold">PearAI Creator</h2>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Agent</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Roo Code)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Chat</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Continue)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Design</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Figma)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Login</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Supabase)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Database</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Supabase)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Launch</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Netlify)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Search</h2>
            <span className="ml-2 text-sm text-gray-500">
              (Powered by Perplexity)
            </span>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Memory</h2>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Community</h2>
          </li>
          <li>
            <h2 className="text-xl font-semibold">PearAI Language</h2>
          </li>
        </ul>
        <p className="mt-8 text-gray-500">Many more coming soon!</p>
      </div>
    </section>
  );
};

export default ToolsComponent;
