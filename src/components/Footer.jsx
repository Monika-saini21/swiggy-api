import { Link } from "react-router-dom";

function Footer (){
return(
    <div className="flex justify-around p-10 text-gray-600  bg-gray-200">
      <ul className="text-sm m-8 mt-13">
        <li className="text-lg font-semibold text-gray"> <Link to="/"><img className='h-14 ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="" srcset="" /></Link> </li>
        <li className="mt-2">© 2025 Swiggy Limited</li>
            </ul>

      <ul className="text-sm m-8">
        <li className="text-lg font-semibold text-gray">Company </li>
        <li className="mt-2">About us</li>
        <li className="mt-2">Careers</li>
        <li className="mt-2">Team</li>
        <li className="mt-2">Swiggy Blog</li>
        </ul> 
      <ul className="text-sm m-8">
        <li className="text-lg font-semibold text-gray">Cantact</li>
        <li className="mt-2">Help and Support</li>
        <li className="mt-2">Partner with Us</li>
        <li className="mt-2">Ride with Us</li>
      </ul>
      <ul className="text-sm m-8">
        <li className="text-lg font-semibold text-gray">Legal</li>
        <li className="mt-2">Term & Conditions</li>
        <li className="mt-2">Cookie Policy</li>
        <li className="mt-2">Privacy Policy</li>
      </ul>
    </div>
)
}
export default Footer;