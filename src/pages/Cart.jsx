import React from 'react';
import useStore from '../stores/store';

function Cart() {
  const { cart, removeFromCart, clearFromCart, totalItems, distinctItems, addToCart } = useStore();

  if (cart.length === 0) {
    return <p>Savat bo'sh</p>; // Agar savat bo'sh bo'lsa, bu xabar ko'rsatiladi
  }
console.log(cart)
  return (
    <div className="cart container">
      <h2 className="title">Savat</h2>


      <div className="cart__container">
        {cart.map((item) => (
          <div key={item.id} className="cart__item">
            <p className="cart__item-name">{item.name} </p>
            <p className="cart__item-price">{item.price}$</p>
            
            {/* Mahsulot sonini boshqarish */}
            <div className="cart__item-counter">
              <button onClick={() => removeFromCart(item.id)}>-</button> {/* Sonini kamaytirish */}
              <span>{item.quantity}</span> {/* Mahsulot sonini ko'rsatish */}
              <button onClick={() => addToCart(item.quantity)}>+</button> {/* Sonini oshirish */}
            </div>

            {/* Mahsulotni butunlay o'chirish */}
            {/* <button onClick={() => clearFromCart(item.id)}>O'chirish</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
