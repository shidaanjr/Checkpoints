import React, { useRef, useState} from "react";
import "./Product.css";

const Product = ({ article, EditQuantity, addItem, minus, removeItem}) => {
  const Quant = useRef();
  const [TotalQuantity, setTotalQuantity] = useState(article.price);



  return (
    <div>
      <div className="product">
        <div className="info">
          <img className="picture" src={article.image} alt="black" />

          <div className="fabric">
            <h6>{article.type}</h6>
            <h6>{article.fabric}</h6>
          </div>
        </div>
        <div className="number">
          
          <i
            className="fas fa-plus"
            onClick={() =>{
                
              EditQuantity(article)
              setTotalQuantity(article.Quantity * article.price);
              addItem();
            
            }}

              ></i>

      
          <input className="Quantity" value ={article.Quantity} ref={Quant} />
          <i
            className="fas fa-minus"
            onClick={() =>{
                
              minus(article)
              setTotalQuantity(article.Quantity * article.price);
              addItem();
            
            }}
          ></i>
        </div>
        <span>{TotalQuantity} $</span>
        <i className="fas fa-times" onClick ={() => {

           var response = window.confirm("Are you sure you want to delete this item");
          if (response) {removeItem(article);}
          
          
          }}></i>
      </div>
    </div>
  );
};

export default Product;
