

const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () =>{
   return isDevelopment ? "https://vend-app-server-7f6h.vercel.app" : "https://vend-app-server-7f6h.vercel.app"; 
}

 
 export { getServer };