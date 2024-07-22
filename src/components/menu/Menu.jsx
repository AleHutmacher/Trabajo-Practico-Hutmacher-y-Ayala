import React, { useState } from "react";
import MenuSection from "./MenuSection";

const menuItems = {
  bebidas: [
    { name: "Café Americano", description: "Café negro clásico", price: 2.5 },
    { name: "Latte", description: "Café con leche y espuma", price: 3.0 },
    { name: "Té Verde", description: "Té verde orgánico", price: 2.0 },
    { name: "Capuchino", description: "Café con leche espumosa y canela", price: 3.5 },
    { name: "Mocha", description: "Café con chocolate y crema", price: 3.5 },
  ],
  comidas: [
    { name: "Croissant", description: "Crujiente y mantecoso", price: 1.5 },
    { name: "Tostada con Aguacate", description: "Tostada con aguacate y especias", price: 4.0 },
    { name: "Ensalada César", description: "Lechuga, pollo, parmesano y aderezo César", price: 5.0 },
    { name: "Bagel con Salmón", description: "Bagel con salmón ahumado y queso crema", price: 6.0 },
    { name: "Sandwich de Pollo", description: "Pollo, lechuga, tomate y mayonesa", price: 5.5 },
  ],
  tortas: [
    { name: "Torta de Chocolate", description: "Deliciosa torta de chocolate", price: 4.5 },
    { name: "Tarta de Manzana", description: "Tarta con relleno de manzana", price: 4.0 },
    { name: "Cheesecake", description: "Pastel de queso cremoso", price: 5.0 },
    { name: "Red Velvet", description: "Torta de terciopelo rojo", price: 4.5 },
    { name: "Torta de Zanahoria", description: "Torta suave de zanahoria", price: 4.5 },
  ],
  sinTacc: [
    { name: "Brownie Sin Gluten", description: "Brownie sin gluten con nueces", price: 3.5 },
    { name: "Galletas Sin Gluten", description: "Galletas crujientes sin gluten", price: 3.0 },
    { name: "Pan Sin Gluten", description: "Pan fresco sin gluten", price: 4.0 },
    { name: "Muffin Sin Gluten", description: "Muffin de arándanos sin gluten", price: 3.5 },
    { name: "Torta Sin Gluten", description: "Torta de vainilla sin gluten", price: 4.5 },
  ],
};

function Menu() {
  const [selectedItems, setSelectedItems] = useState({});

  const handleQuantityChange = (itemName, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: quantity,
    }));
  };

  const calculateTotal = () => {
    const total = Object.keys(selectedItems).reduce((sum, itemName) => {
      const item =
        menuItems.bebidas.find((item) => item.name === itemName) ||
        menuItems.comidas.find((item) => item.name === itemName) ||
        menuItems.tortas.find((item) => item.name === itemName) ||
        menuItems.sinTacc.find((item) => item.name === itemName);
      return sum + item.price * selectedItems[itemName];
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="section rounded-xl flex flex-col w-full justify-center items-center gap-6" id="menu">
      <h2 className="text-5xl text-center text-emerald-700">Menu</h2>
      <div className="flex text-center w-full justify-around">
        <MenuSection
          title="Bebidas"
          items={menuItems.bebidas}
          onQuantityChange={handleQuantityChange}
        />
        <MenuSection
          title="Comidas"
          items={menuItems.comidas}
          onQuantityChange={handleQuantityChange}
        />
        <MenuSection
          title="Tortas"
          items={menuItems.tortas}
          onQuantityChange={handleQuantityChange}
        />
        <MenuSection
          title="Sin TACC"
          items={menuItems.sinTacc}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <button onClick={calculateTotal} className="bg-white text-black w-32">
        Calcular Total
      </button>
      <div className="w-min">Total: <span className="text-emerald-700">${calculateTotal()}</span></div>
    </div>
  );
}

export default Menu;

