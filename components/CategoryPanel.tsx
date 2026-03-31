'use client';

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { type PortfolioCategory } from "@/components/RecentProjects";

type CategoryItem = {
  id: PortfolioCategory;
  label: string;
};

type CategoryPanelProps = {
  categories: CategoryItem[];
  activeCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
};

const CategoryPanel = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed top-28 inset-x-0 z-[4500] flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black-100/80 backdrop-blur-md px-3 py-2">
        {isExpanded && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`rounded-full border px-5 py-2 text-sm md:text-base transition-colors ${
                  activeCategory === category.id
                    ? "bg-purple text-white border-purple"
                    : "border-white/20 text-white/80 hover:border-purple/50 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? "Hide categories" : "Show categories"}
          className="h-9 w-9 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-purple/50 transition-colors flex items-center justify-center"
        >
          {isExpanded ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
};

export default CategoryPanel;
