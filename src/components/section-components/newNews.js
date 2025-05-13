import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function LatestNews() {
  const [news, setNews] = useState([]);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get("http://localhost:5247/api/blogs/");
      console.log("Latest News", response.data);
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  console.log("Latest News", news);

  return (
    <section className="py-16 bg-gray-200 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mt-20 mb-45">Latest News</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {news.map((item) => (
            <div
              key={item.id} // Assuming each news item has a unique ID
              className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={`http://localhost:5247${item.image}`} // Replace with your image path
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-orange-400 text-sm mb-2">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
