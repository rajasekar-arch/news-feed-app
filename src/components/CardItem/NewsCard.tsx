// components/NewsCard.tsx (use .tsx if using TypeScript)
"use client"

import React from 'react';
import styles from './NewsCard.module.scss';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  source?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, url, source }) => {
  return (
    <div className={styles.cardItem}>
      <div className="mb-4 border p-4 rounded-2xl shadow hover:shadow-md transition-all duration-200 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          {source && <span className="text-sm text-gray-500">Date: {source}</span>}
          <a
            href={url}
            className="text-blue-600 font-medium hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
