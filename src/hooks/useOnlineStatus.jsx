import { useEffect, useState } from "react";

function useOnlineStatus (){
const [onlineStatus,setOnlineStatus] = useState(navigator.onLine);
useEffect(()=>{
    window.addEventListener("online", ()=> setOnlineStatus(true));
    window.addEventListener("offline",()=> setOnlineStatus(false));
},[]);

return onlineStatus ;

} 
export default useOnlineStatus;