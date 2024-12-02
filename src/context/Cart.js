import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";
import PayPalButton from "../paypal/PayPalButton";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    getTotalPrice,
    // clearCart,
  } = useCart();

  const removeAll = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="container-cart">
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div className="cart-body">
            {" "}
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th style={{ width: "25%" }}>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} width="150" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="quantity buttons_added">
                        <input
                          type="button"
                          value="-"
                          className="minus"
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        />
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          className="input-text qty text"
                          size={4}
                        />
                        <input
                          type="button"
                          value="+"
                          className="plus"
                          onClick={() => incrementQuantity(item.id)}
                        />
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="removeBtn"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <h3>Total Amount: </h3>
                  </td>
                  <td>
                    <h3>${getTotalPrice().toFixed(2)}</h3>
                  </td>
                  <td>
                    <button className="removeBtn" onClick={() => removeAll()}>
                      Remove All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <PayPalButton totalAmount={getTotalPrice()} />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
