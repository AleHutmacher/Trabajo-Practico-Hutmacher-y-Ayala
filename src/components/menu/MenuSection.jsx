import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({ title, items, onQuantityChange }) {
  return (
    <div>
      <h2 className="text-emerald-700 text-2xl">{title}</h2>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
