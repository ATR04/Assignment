import React , {useState} from "react";
import './index.css';
import Data0 from "./API/CONTENTLISTINGPAGE-PAGE1.json";
function SearchBar(){


        const [searchInput, setSearchInput] = useState("");
       
       const handleChange = (e) => {
         e.preventDefault();
         setSearchInput(e.target.value);
       };
       
        
        let obj=Data0.page["content-items"].content;

       obj.filter(post => {
        if (searchInput === "") {
         
          return post;
        } else if (post.name.toLowerCase().includes(searchInput.toLowerCase())) {
         console.log(post);
          return post;
        }
      })
        
       

    return(
        <div>
            <input 
            className="bar" 
            type="search" 
            placeholder="search here"
            onChange={handleChange}
            value={searchInput}
            />
        </div>
    )

}

export default SearchBar;