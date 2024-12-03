import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/Slice/ProductSlice";
import { Add } from "../redux/Slice/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.product);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setSkeleton(false);
        dispatch(setProducts(data));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);

  const AddToCart = (product) => {
    dispatch(Add(product));
    toast.success("Product Added to Cart 🎉🎉🎉", {
      position: "bottom-left", // Specify the position here
    });
  };

  return (
    <div className="container mx-auto px-3 py-3">
      <ToastContainer />
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Trending Products
      </h2>

      {skeleton ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white border rounded-lg shadow flex flex-col gap-2 justify-between animate-pulse"
            >
              <div className="w-60 h-60 bg-gray-300 rounded-t-lg"></div>
              <div className="px-5 pb-5 flex flex-col h-full">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="h-6 w-16 bg-gray-300 rounded"></div>
                  <div className="h-10 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm bg-white border rounded-lg shadow flex flex-col justify-between"
            >
              <img
                className="w-60 h-60 p-4 rounded-t-lg"
                src={product.image}
                alt={product.title}
              />
              <div className="px-5 pb-5 flex flex-col h-full">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900">
                  {product.title}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    className="bg-blue-500 text-white font-semibold p-2 rounded-md ml-2"
                    onClick={() => AddToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
