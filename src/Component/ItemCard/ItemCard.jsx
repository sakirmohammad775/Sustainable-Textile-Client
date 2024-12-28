import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ItemCard = ({ item }) => {
    const {_id, name, image, price, description } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location =useLocation()
    const handleAddToCart = item => {
        if (user && user.email) {
            //TODO :send cart item to the database
            console.log(user.email,item)
            const cartItem={
                    cartId:_id,
                    email:user.email,
                    name,
                    image,
                    price, 
            }
            Axios.post
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send to the user to the login page
                    navigate('/signIn',{state:{from:location}})

                }
            });
        }
        console.log(itemCart)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url("${image}")` }}></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{price}</span>
                        <button onClick={() => handleAddToCart(item)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemCard;