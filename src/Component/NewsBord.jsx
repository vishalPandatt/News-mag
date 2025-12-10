import { use } from "react";


const NewsBord = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).than(responce=>responce.json()).than(data=>setArticles(data.articles)
    );
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger ">News</span></h2>
    </div>
  )
}

export default NewsBord
