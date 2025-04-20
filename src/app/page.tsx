"use client";

import styles from '@/components/CardItem/NewsCard.module.scss';
import NewsCard from "@/components/CardItem/NewsCard";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;

import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  source?: {
    name: string;
  };
}


export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <div className={styles.cardContainer}>
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article?.title}
            description={article.description}
            url={article.url}
            source={article.source?.name}
          />
        ))}
      </div>

    </main>
  );
}
