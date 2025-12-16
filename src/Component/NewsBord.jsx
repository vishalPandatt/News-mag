import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";


const NewsBord = ({ category = "general" }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Failed to fetch articles:", err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger ">News</span></h2>

      {articles.map((news, index) => {
        return (
          <NewsItems
            key={news.url ?? index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  )
}

export default NewsBord
