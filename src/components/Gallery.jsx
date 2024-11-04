import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios"

function Gallery(props) {
  const [items, setItems] = useState();


  async function loadMovies(){
    try {
      const response = await axios.get("http://localhost:5000/upload")
      const movieData = response.data  
      console.log(movieData)    
      setItems( movieData.map((movie) => (<Item key={movie.id} url={movie.url} category={movie.category} name={movie.name} size={movie.size} price={movie.price}   />)))          
    } catch (error) {
      console.log(error)     
    }
  }


  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div style={{display:"flex"}} >
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2" >
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-left">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
