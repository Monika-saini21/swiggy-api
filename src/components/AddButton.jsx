
function AddButton({info,addToCart,quantity,decreaseQuantity,increaseQuantity}){
      
    return(
        <>
         {quantity===0?(
                       <button
                      onClick={() => addToCart(info)}
                      className="bg-white relative bottom-4 border-2 transition duration-300 ease-in-out border-gray-300 font-bold text-green-600 text-lg px-6 py-1 rounded hover:bg-green-700 hover:text-white"
                    >
                      Add
                    </button>
                    ):(
                        <div className="flex items-center justify-between  bg-white border-2 border-gray-300 rounded px-1 py-1  relative bottom-4">
                        <button
                          onClick={() => decreaseQuantity(info)}
                          className="text-lg font-bold px-1 text-green-600 hover:text-red-600"
                        >
                          -
                        </button>
                        <span className="text-md px-4 font-medium">{quantity}</span>
                        <button
                          onClick={() => increaseQuantity(info)}
                          className="text-lg font-bold px-1 text-green-600 hover:text-green-800"
                        >
                          +
                        </button>
                           </div>
                    )}
                  </>
    )

}
export default AddButton;