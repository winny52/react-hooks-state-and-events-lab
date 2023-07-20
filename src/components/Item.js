import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(null)

  function handleCart(){
    if (cart == null) {
      setCart("in-cart");
    }else{
      setCart(null)
    }
  }
  const buttonText = (cart === null) ? "Add to Cart" : "Remove From Cart";
  const btnClass = (cart === null) ? "add" : "remove";
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={btnClass}>{buttonText}</button>
    </li>
  );
}

export default Item;