import Product from "../Product/Product";



const Products = ({data,handleAddToCart}) => {
//    const {}=data
// console.log(data);
    return (
        <div>
            <div className="grid md:grid-cols-3  grid-cols-1 gap-5 mr-4 ">
                {
                    data.map((item,idx)=>(<Product key={idx} item={item}handleAddToCart={handleAddToCart}></Product>))
                }
            </div>
        </div>
    );
};

export default Products;