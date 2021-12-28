import { useState } from "react";
import "./App.css";
import Product from "./Product/Product";
import Summary from "./summary/Summary";
import ProductList from "./Productlist/ProductList";

function App(props) {
  const [Products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://contents.mediadecathlon.com/p1901255/k$8870d3bdfed8faa1f8b3422de5d92354/t-shirt-100-coton-fitness-sportee-noir.jpg?&f=452x452",
      type: "pull",
      fabric: "coton",
      price: 30,
      Quantity: 1,
    },

    {
      id: 2,
      image:
        "https://www.zeeman.com/media/catalog/product/cache/5050dbc22447fab33b3d2c8a729076f7/2/0/2020095597986_Front_01.jpg",
      type: "Shirt",
      fabric: "coton",
      price: 40,
      Quantity: 1,
    },

    {
      id: 3,
      image:
        "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
      type: "Shirt",
      fabric: "coton",
      price: 20,
      Quantity: 1,
    },
  ]);

  const [CopieProducts, setCopieProducts] = useState([...Products])

  const count = () => {
    let Total = 0;

    Products.map(
      (product) => (Total = Total + product.price * product.Quantity)
    );

    return Total;
  };

  const [TotalPrice, setTotalPrice] = useState(count());
  const [FinalTotal, setFinalTotal] = useState(count());

  const addition = () => {
    let TT = count();

    setTotalPrice(TT);
    setFinalTotal(TT);
    
  };

  const ChangeQuantity = (element) => {
    Products.map((Product) =>
      Product.id === element.id
        ? (Product.Quantity = Product.Quantity + 1)
        : Product.Quantity
    );
  };

  const ChangeQuant = (element) => {
    Products.map((Product) =>
      Product.id === element.id
        ? (Product.Quantity = Product.Quantity - 1)
        : Product.Quantity
    );
  };

const ShippingValue = (ship) =>{

switch (ship){

case 'Standard-delivery-5£' : setFinalTotal(FinalTotal+5)
break;
case 'Rapid-delivery-10£': setFinalTotal(FinalTotal+10)
break;
case 'Express-delivery-20£' : setFinalTotal(FinalTotal+20)
break;
default : setFinalTotal(FinalTotal)

}

}

const CodeValue = (code) =>{

  switch (code){
  
  case 'Standard -10%' : setFinalTotal(FinalTotal - ((FinalTotal*10)/100))
  break;
  case 'New -20%': setFinalTotal(FinalTotal - ((FinalTotal*20)/100))
  break;
  case 'VIP -30%' : setFinalTotal(FinalTotal - ((FinalTotal*30)/100))
  break;
  default : setFinalTotal(FinalTotal)
  
  }
  
  }

const deleteProduct =(item) =>{


 setProducts([...Products.filter(product => product.id !== item.id )]);
 setCopieProducts([...Products]);

}

const filterProduct = (sentence) =>{

  if(sentence !==''){

  setProducts([...Products.filter(product => product.type.toLowerCase().includes(sentence.toLowerCase()))])

  }else {setProducts([...CopieProducts])}


} 

  return (
    <div className="App">
      <main>
        <header>
          <h1>Shopping Card</h1>
          <input className="filter" placeholder="Filter by title" onChange={(e) => filterProduct(e.target.value)} />
        </header>

        <ProductList
          items={Products}
          Change={ChangeQuantity}
          decrease={ChangeQuant}
          add={addition}
          remove = {deleteProduct}
        />
      </main>

      <Summary sum={TotalPrice} final ={FinalTotal} List={Products} Coupon = {CodeValue} Shipping={ShippingValue}/>
    </div>
  );
}

export default App;
