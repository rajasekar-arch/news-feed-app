"use client";

import styles from "@/components/CardItem/NewsCard.module.scss";
import NewsCard from "@/components/CardItem/NewsCard";
// const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
// const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;

import { useEffect, useState } from "react";

// interface Article {
//   title: string;
//   description: string;
//   url: string;
//   source?: {
//     name: string;
//   };
// }

interface itemFeed {
  title: string;
  link: string;       
  content: string;
  contentSnippet:string;
  guid: string;   
  isoDate: Date | string;
  pubDate: string;
}

export default function Home() {
  const [articles, setArticles] = useState<itemFeed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/rss');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error('Failed to load news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data.articles))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-blue-600">Loading news...</span>
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article?.title}
              description={article.content}
              url={article.link}
              source={article.pubDate}
            />
          ))}
        </div>
      )}
    </main>
  );
}
