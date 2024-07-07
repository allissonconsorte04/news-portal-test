'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./index.module.css";
import { Article, fetchNews } from "@/utils/newsApi";
import { useEffect, useState } from "react";
import Image from "next/image";

export const HotTopic = () => {
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const news = await fetchNews()
      setArticles(news)
    }
    fetchData();
  }, [])

  return (
    <div className={styles["hot-topic-container"]}>
      <button type="button" onClick={fetchNews}>Teste</button>
      <div className={styles["carousel-container"]}>
        <Carousel>
          <CarouselContent className="">
            {articles.map((article, index) => (
              <CarouselItem key={index} className={styles["carousel-item"]}>
                <Image 
                  src={article.urlToImage ?? ''}
                  width={500}
                  height={500}
                  alt={article.source.name}
                />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={styles["carousel-previous"]}
          ></CarouselPrevious>
          <CarouselNext className={styles["carousel-next"]}>&gt;</CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};
