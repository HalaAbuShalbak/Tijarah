import React from 'react';
import {useNavigate} from 'react-router-dom'
const Cart = ({items}) => {
const navigate=useNavigate()
    const total = items.reduce((sum, item) => sum + item.price.slice(1) * item.quantity, 0);
console.log(items)
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg mt-6 ">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
         
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
              </div>
              <p className="text-blue-600 font-medium">${Number(item.price.slice(1)) * Number(item.quantity)}</p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <p className="font-bold">Total:</p>
            <p className="text-lg font-bold text-green-600">${total.toFixed(2)}</p>
          </div>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" onClick={(()=>{
navigate("/login")
          })}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
