import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity } from '../redux/actions/cartActions';
import { incrementQuantity,decrementQuantity } from '../redux/Slice/CartSlice';

function Cart() {
  const cartItems = useSelector(state => state.Cart.cartItems || []);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="font-medium">Quantity: {item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold text-green-600">
              ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 mt-6 rounded-lg font-medium hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
