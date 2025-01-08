import React, { useEffect } from "react"
import {useState} from "react";
import axios from 'axios';
import {toast} from "react-toastify";
import Spinner from "./spinner";
import useGif from '../hooks/useGif.js';


const API_KEY = process.env.React_API_KEY;
const Random = (props) => {
  const [isLoader,setisLoader] = useState(true);
  const [gif,setgif] =useState("");
  

async function fetchgif(){

  setisLoader(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=EbYy0ptIor7MXVHPXtXgVvx7hWf9FvyA&tag=&rating=g`;
    const {data} = await axios.get(url);
    const imgsource= data.data.images.downsized_large.url;
    setgif(imgsource);
    
  
  // catch(error) {
  //   toast.warning("error");
  //     console.log("caught an error");
  // }
  setisLoader(false);
}


useEffect(()=>{
  fetchgif();
},[])


  return (
    <div className="w-1/2 h-auto bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center justify-center gap-y-5 mt-[15px] ">
        <h1 className="text-3xl uppercase underline font-bold">
          A random gifs
        </h1>

 <div className={`flex justify-center ${isLoader ? "min-h-[40vh]":"h-auto"}`}>
  {

  isLoader? (<Spinner/>):( <img src={gif} alt="Random Gifs"/>)
  }
  </div>

    
        <button 
        onClick={()=>fetchgif()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-8">Generate</button>
    </div>
  )
};

export default Random;
