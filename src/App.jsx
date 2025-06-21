import { useEffect,useState} from 'react'
import Cards from './components/Cards';
import "/index.css"
import Nav from './components/Nav';
import Orderdetail from './components/Orderdetail';


function App() {

const[data,setData]=useState({})

 useEffect(() => {
    fetch("/swiggy/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
    <Nav/>
    <Orderdetail/>
    <div className='flex justify-center flex-wrap  w-50% gap-9 m-18 mt-13 '>
    {
      data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants?.map((data)=>(
        <Cards   data ={data}/>
      ))
    }

   </div>
    </>
  )
}

export default App
