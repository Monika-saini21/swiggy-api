import useOnlineStatus from "../hooks/useOnlineStatus";
import offline from "../assets/Offline.jpg"
function Offline (){
 const onlineStatus = useOnlineStatus(); 

  if (onlineStatus === false){
    return(<div className=' flex justify-center items-center '> 
    <img className='w-80' src={offline} alt="" srcset="" />
    <div className="text-2xl font-semibold mt-5 text-orange-600">
    <p>Looks like Offline,</p>
    <p>Please check your internet connection.</p></div></div>)
  }
}
export default  Offline;