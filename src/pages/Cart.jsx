import React from 'react';
import useStore from '../stores/store';

function Cart() {
  const { cart, removeFromCart, clearFromCart, totalItems, distinctItems } = useStore();

  if (cart.length === 0) {
    return <p>Savat bo'sh</p>;
  }

  return (
    <div>
      <h2>Savat</h2>
      <p>Umumiy mahsulotlar soni: {totalItems(cart)}</p>
      <p>Har xil turdagi mahsulotlar: {distinctItems(cart)}</p>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.name} - {item.price}$</p>
            
            {/* Mahsulot sonini boshqarish */}
            <div>
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.quantity}</span> {/* Mahsulot sonini ko'rsatish */}
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            {/* Mahsulotni butunlay o'chirish */}
            <button onClick={() => clearFromCart(item.id)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
