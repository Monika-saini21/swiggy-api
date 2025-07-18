import { useEffect, useRef, useState } from "react";

function useHoverDetail(){
const timeoutRef = useRef(null);
const [isHovered, setIsHovered] = useState(false);
 const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
     if (isHovered) {
       timeoutRef.current = setTimeout(() => {
         setShowDetail(true);
       }, 1000); 
     } else {
       clearTimeout(timeoutRef.current);
       setShowDetail(false);
     }
 
     return () => clearTimeout(timeoutRef.current);
   }, [isHovered]);

    return {
     
        setIsHovered,
        showDetail,
       }
}
export default useHoverDetail;