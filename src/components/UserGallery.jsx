import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios"
import { getServer } from "../util";

function UserGallery(props) {
  const [items, setItems] = useState();
  const [name, setName] = useState();
  const [visible, setVisible] = useState(true);
  const [balance, setBalance] = useState();
  const user = localStorage.getItem("userDetail")
  const userBalance = JSON.parse(user).balance
  const userName = JSON.parse(user).name
  const id = JSON.parse(user)._id
  


  async function loadMovies(){
    const movies =  []
    try {
      const response = await axios.get(`${getServer()}/movies/${id.toLocaleString()}`)
      if(response.data != undefined){
        movies.push(response.data)
       setItems( movies.map((movie) => (<Item key={movie.id} url={movie.url} name={movie.name} size={movie.size}  />)))          
      }
      else{
        setVisible(false)
      }
       } catch (error) {
      console.log(error)     
    }
  }

  useEffect(()=>{
    setBalance(userBalance)
    setName(userName)
    loadMovies();
  },[])
  


  return (
    <div className="gallery-view" >
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2" >
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
          <h1>
             {user?name:""}
            </h1>       
          </div>
          <p>
            Your token balance: NWARO {user?balance:""}
          </p>
        </div>
        <h3 hidden={visible}>Please log in and mint movies to see your movie list</h3>
        {items}
      </div>
    </div>
  );
}

export default UserGallery;
