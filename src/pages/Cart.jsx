import React from 'react';
import useStore from '../stores/store';
import ProductNotAvailable from '../components/ui/ProductNotAvailable';

function Cart() {
  const { cart, removeFromCart, clearFromCart, addToCart } = useStore();

  // Agar savat bo'sh bo'lsa, ProductNotAvailable komponentini ko'rsatish
  if (cart.length === 0) {
    return <ProductNotAvailable />;
  }

  return (
    <div className="cart">

      <div className="conatiner">
        <div className="cart__container">
          <h2 className="title">Savat</h2>
          {cart.map((item) => (
            <div key={item.productId} className="cart__item">
              <p className="cart__item-name">{item.name}</p>
              <p className="cart__item-price">{item.price}$</p>

              {/* Mahsulot sonini boshqarish */}
              <div className="cart__item-counter">
                <button onClick={() => removeFromCart(item.productId)}>-</button> {/* Sonini kamaytirish */}
                <span>{item.quantity}</span> {/* Mahsulot sonini ko'rsatish */}
                <button onClick={() => addToCart(item)}>+</button> {/* Sonini oshirish */}
              </div>
            </div>
          ))}
        </div>
        {/* Barcha mahsulotlarni o'chirish tugmasi */}
        <button className="cart__delete-all" onClick={clearFromCart}>All delete</button>
      </div>
    </div>
  );
}

export default Cart;
