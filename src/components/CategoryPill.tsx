
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryPillProps {
  category: string;
  active?: boolean;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category, active = false }) => {
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/category/${slug}`}>
      <div className={`
        inline-block px-4 py-2 rounded-none font-medium text-sm md:text-base
        transition-all duration-200 border-2 border-black
        ${active 
          ? 'bg-black text-white shadow-neobrutalism-sm' 
          : 'bg-white text-black hover:bg-neobrutalism-yellow shadow-neobrutalism-sm hover:shadow-neobrutalism hover:translate-x-[-2px] hover:translate-y-[-2px]'
        }
      `}>
        {category}
      </div>
    </Link>
  );
};

export default CategoryPill;
