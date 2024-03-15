
import { useEffect } from 'react'
import './App.css'
import Products from './assets/componenets/Products/Products'
import { useState } from 'react'
import Cart from './assets/componenets/Cart/Cart';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [data,setData]=useState([]);
  const [cart,setCart]=useState([]);
useEffect(()=>{
  fetch('./fakeData.json')
  .then(res=>res.json())
  .then(data=>setData(data))
},[]);

const handleAddToCart=(id)=>{
  const isExcist=cart.find((item)=>item.id==id.id);
  // console.log(isExcist);
  // console.log(id);
  if (!isExcist) {
    toast.success("Product Sucessfully Added")
    setCart([...cart,id])
  }
  else{
    toast.warn('product already exsist')
  }
}




  return (
    <>
      <h1 className='text-center  mt-5 font-bold text-4xl'>Our Products</h1>
      <div className='flex md:flex-row flex-col'>
      <div className='md:w-3/4'>
      <Products data={data} handleAddToCart={handleAddToCart}></Products>

      </div>
        <div className='md:w-1/4'>
        <Cart cart={cart}></Cart>

        </div>
      </div>
      <ToastContainer></ToastContainer>
      
   
    </>
  )
}

export default App
