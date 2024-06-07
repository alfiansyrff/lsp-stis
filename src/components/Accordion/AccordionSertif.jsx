
import React, { useState } from 'react';

function TabMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-16 mb-10">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`text-sm md:text-md font-medium px-5 py-3 ${
              activeIndex === index
                ? 'text-primaryBlue border-b-4 border-primaryBlue'
                : 'text-gray-500 hover:text-primaryBlue'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="p-5 mt-5">
        {items[activeIndex] && (
          <p className="text-gray-500 shadow border-2 border-gray-200 px-10 py-5 rounded-lg dark:text-gray-400">{items[activeIndex].content}</p>
        )}
      </div>
    </div>
  );
}

export default TabMenu;
