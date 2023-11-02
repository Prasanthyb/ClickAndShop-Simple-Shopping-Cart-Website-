import React, { useState } from "react";
import './style.css';
import data from "./TemplateData.json";
import { ShoppingCart } from "phosphor-react";


function Items() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]); // Initialize an empty array for the cart items

  // Function to handle adding items to the cart
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };
  
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className="templateContainer">
        {/* Search input container */}
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        {/* Template container */}
        <div className="template_Container">
          {/* Template grid */}
          <div className="templateGrid">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return true;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                    <button className="addToCartBttn" onClick={() => addToCart(val)}>
                      Add To Cart 
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Display the items in the cart on the same page */}
      <div className="cartContainer">
        <ShoppingCart size={50}  />Total Cost: ${totalCost}
        <ul style={{ listStyleType: 'none' ,textAlign: 'left'  }}>
          {cartItems.map((item, index) => (
            <li key={index}>{index+1} {item.title}</li>
          ))}
          
        </ul>
      </div>
    </>
  );
}

export default Items;
