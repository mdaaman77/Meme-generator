import axios from "axios";
import { useEffect, useState } from "react";




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY || 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState("");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(tag);
  }, []);

  return { loading, gif, fetchData };
};

