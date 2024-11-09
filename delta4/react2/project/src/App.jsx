import "./App.css";
import Title from "./Title.jsx"; 
import Product from "./product.jsx";
import ProductTab from "./productTab.jsx";



function App() {

  return (
    <div>
      <Product title="phone" price="234"></Product>/
      {/* if pass number it wrap in curly braces */}
      <Product title="laptop" ></Product>
      <Product title="pen" price={21 / 3}></Product>



      {/* lecture 2  */}
      <ProductTab></ProductTab>

      
    </div>
  );
}

export default App;
