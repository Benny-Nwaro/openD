import {jwtDecode} from "jwt-decode";


const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () =>{
   return isDevelopment ? "https://vend-app-server-is9c.vercel.app" : "https://vend-app-server-is9c.vercel.app";
}
const decodeUser = () => {
   const token = localStorage.getItem("token");
   return jwtDecode(token);
 };
 
 export { getServer, decodeUser };