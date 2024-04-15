import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      <div>
        {items.length === 0 ? (
          <p>Your cart is empty, browse the restaurants...</p>
        ) : (
          items.map((item, index) => {
            const {name, price, quantity} = item
            return <div key={index}>

              <button onClick={() => dispatch(removeItem({name, price}))}>
                remove
              </button>
              <p>{name}</p>
              <p>{(price / 100).toFixed(2)}</p>
              <p>{quantity}</p> 
            </div>;
          })
        )}
        <p> Total price : {totalPrice / 100}.00</p>
      </div>
    </div>
  );
};

export default Cart;
