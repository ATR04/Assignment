import React from "react";
import Data0 from "./API/CONTENTLISTINGPAGE-PAGE1.json";
import Data1 from "./API/CONTENTLISTINGPAGE-PAGE2.json";
import Data2 from "./API/CONTENTLISTINGPAGE-PAGE3.json";
import './index.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Content(){
   
    return(

        
        <div className="img">
               {Data0.page["content-items"].content.map((post,index)=>(
            <div key={index}>
               <LazyLoadImage 
               effect="blur"
               src={post["poster-image"]}  
               alt="img" /> 
               <h2 className="poster-name">{post.name}</h2>
               
            </div>   
        ))}
        {Data1.page["content-items"].content.map((post,index)=>(
            <div key={index}>
               <LazyLoadImage 
               effect="blur"
               src={post["poster-image"]}  
               alt="img" /> 
               <h2 className="poster-name">{post.name}</h2>
               
            </div>   
        ))}
        {Data2.page["content-items"].content.map((post,index)=>(
            <div key={index}>
               <LazyLoadImage 
               effect="blur"
               src={post["poster-image"]}  
               alt="img" /> 
               <h2 className="poster-name">{post.name}</h2>
               
            </div>   
        ))}
        </div>
        
    )
    
}

export default Content;
