import React, { useState } from "react";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [close, setClose] = useState(true);
  const [url, setUrl] = useState("");

  async function shortLinks() {
    const hostName = "http://localhost:8080/api/url";
    try {
      const response = await fetch(hostName,{
        method : "POST",
        headers:{
            "content-type" : "Application/json"
           
        },
        body : JSON.stringify({
            "originalUrl" : url
        
        })
      });
      if (!response.ok) throw new Error(`http error`);
      const data = await response.json();
      
      setMessage(data.shortUrl);
    } catch (error) {
      console.error(error.message);
    }
    
    
    setClose(true);
  }

  return (
    <section className="flex justify-center items-center mt-48">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Shorten your links.
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Simple, fast and easy URL shortening.
        </p>

        <div className="flex bg-white p-2 rounded-xl shadow-lg border">
          <input
            type="text"
            placeholder="Paste your long URL..."
            className="outline-none px-3 w-96"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />

          <button
            onClick={shortLinks}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Generate
          </button>
        </div>

        {close && message && (
          <div className="mt-4 bg-white border rounded-xl p-3 shadow-sm flex items-center justify-between gap-4">
            <p className="text-gray-700 truncate">{message}</p>

            <button className="text-sm px-3 py-1 rounded-lg hover:bg-gray-100 transition">
              Copy
            </button>

            <button
              onClick={() => setClose(false)}
              className="text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
