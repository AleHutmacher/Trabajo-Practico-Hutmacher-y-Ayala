import React, { useState } from "react";

function MenuItem({ item, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity <= 10 && newQuantity >= 0) {
      setQuantity(newQuantity);
      onQuantityChange(item.name, newQuantity);
    }
  };

  return (
    <div className="menu-item">
      <h3 className="text-amber-700">{item.name}</h3>
      <p>{item.description}</p>
      <p>Precio: <span className="text-emerald-700">${item.price.toFixed(2)}</span></p>
      <input className="bg-white text-center"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="0"
        max="10"
      />
    </div>
  );
}

export default MenuItem;
