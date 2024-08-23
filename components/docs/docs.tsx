"use client";
import React, { useState } from "react";

const tabData = [
  {
    id: "Quickstart",
    label: "Quickstart",
    content: "This is the quickstart content.",
  },
  { id: "demos", label: "Demos", content: "This is the Demo content." },
  { id: "features", label: "Features", content: "These are the features." },
];

const DocsComponent = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex pt-16">
      {/* Tabs on the left side */}
      <div className="w-1/4 border-r border-gray-200">
        <ul className="flex flex-col">
          {tabData.map((tab) => (
            <li
              key={tab.id}
              className={
                "cursor-pointer p-4 " +
                (activeTab === tab.id ? "text-white bg-primary-800" : "")
              }
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content on the right side */}
      <div className="w-3/4 p-6">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsComponent;
