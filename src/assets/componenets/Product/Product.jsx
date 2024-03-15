

const Product = ({item,handleAddToCart}) => {
    // console.log(item);
    const{title,price,image,}=item
    return (
        <div>
            <div className="w-full">
               <img className="w-full" src={image} alt="title" />
               <div className="flex justify-between items-center">
               <h2 className="text-2xl">Title: {title.slice(0,10)}</h2>
               <p>Price : {price}</p>
               </div>
               <div className="w-full">
               <button onClick={()=>handleAddToCart(item)} className="btn bg-slate-600 p-4 text-white">Add to Cart</button>
               </div>
            </div>
        </div>
    );
};

export default Product;