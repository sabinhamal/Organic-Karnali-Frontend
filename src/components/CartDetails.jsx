import React, { useState } from "react";

const CartDetails = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 20 },
    { id: 2, name: "Product 2", quantity: 1, price: 15 },
    { id: 3, name: "Product 3", quantity: 3, price: 10 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout...");
  };

  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Details</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold">${item.quantity * item.price}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <p className="font-bold text-gray-800">Total: ${total}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handleEmptyCart}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
            >
              Empty Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all"
            >
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDetails;
