import React from "react";
import SearchBar from "./search";
import Title from "./title";
import Content from "./contenet";
import './index.css';

function App(){
    
    return(
    <div className="container">
           <Title />
           <SearchBar />
           <Content />
        
    </div>
    );
}

export default App;