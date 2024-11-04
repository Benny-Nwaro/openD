import React, { useEffect } from "react";
import Footer from "./components/Footer";
import "./assets/main.css";
import Header from "./components/Header";
import axios from "axios";



function App() {
  const location = window.location.href

  useEffect(()=>{
    try {
      const fetchData = async()=>{
        if(location.includes("=")){
          const id = location.split("=")[1]
        const res = await axios.get(`http://localhost:5000/login/${id}`)
        const user = res.data.userDetails
        localStorage.setItem("userDetail", JSON.stringify(user))
        }  
      }
      fetchData()   
    } catch (error) {
      console.log(error)     
    }
  },[])

  return (
    <div className="App">
      <Header />
      {/* <Minter /> */}
      {/* <Item id={NFTID}/> */}

      <Footer />
    </div>
  );
}

export default App;
