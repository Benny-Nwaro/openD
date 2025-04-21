

const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () =>{
   return isDevelopment ? "https://vend-app-server-7f6h.vercel.app" : "https://token-server2025-df20d4c09df2.herokuapp.com"; 
}

 
 export { getServer };