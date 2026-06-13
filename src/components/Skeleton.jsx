import React from 'react';

const Skeleton = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 dark:bg-zinc-800 rounded-md ${className}`}></div>
  );
};

export const ProductCardSkeleton = () => (
  <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm transition-colors duration-300">
    <div className="relative aspect-[3/4] bg-gray-100 dark:bg-zinc-800">
      <Skeleton className="w-full h-full rounded-none" />
    </div>
    <div className="flex flex-col p-6 flex-grow">
      <Skeleton className="w-16 h-3 mb-4 mx-auto" />
      <Skeleton className="w-3/4 h-5 mb-3 mx-auto" />
      <Skeleton className="w-1/4 h-5 mt-auto mx-auto" />
    </div>
  </div>
);

export default Skeleton;
