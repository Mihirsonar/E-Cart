import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/Slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  // Fetch products from the API when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const Addtocart = (product) => {
    dispatch(Add(product));
    toast("Product Added to Cart🎉🎉🎉");

  };



  return (
    <div className="container mx-auto px-3 py-3">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Trending Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-full max-w-sm bg-white border rounded-lg shadow flex flex-col justify-between">
            <img className="w-60 h-60 p-4 rounded-t-lg" src={product.image} alt={product.title} />
            <div className="px-5 pb-5 flex flex-col h-full">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900">{product.title}</h5>

              {/* Rating */}
              <div className="flex items-center mt-2.5 mb-5">
                {/* Render stars */}
              </div>

              {/* Cart Controls */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <button
                  className="bg-blue-500 text-white font-semibold p-2 rounded-md ml-2"
                  onClick={() => Addtocart(product)} // Use an arrow function to call Addtocart when clicked
                >
                  Add To Cart
                  <ToastContainer/>
                </button>
         
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage;
