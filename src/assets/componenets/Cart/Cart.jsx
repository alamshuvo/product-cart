

const Cart = ({cart}) => {
    console.log(cart);
// const {title,price}=cart
    return (
        <div>
            <div className="flex justify-between bg-gray-300 p-4 rounded-lg  font-bold">
                <h1>Title : {
                    cart.map((cart,idx)=>(<li key={idx}>{cart.title.slice(0,10)}</li>))
                    }</h1>
                <p>Price:{
                    cart.map((cart,idx)=>(<li key={idx}>{cart.price}</li>))
                    }</p>
                <div className="flex flex-col mt-5">
                    {
                        cart.map((cart,idx)=>(<button className="bg-purple-400 text-white rounded-sm mt-2" key={idx}>Delete</button>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;