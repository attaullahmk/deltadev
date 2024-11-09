import "./App.css"
import Title from "./Title.jsx"; //write or not extension jsx no need
// import Product from "./product.jsx";
import ProductTab from "./productTab.jsx";


// lecture 6 -> these are our first component 
// write component here but conventional it must to write in separate file even a small component 
// function Title() {
//   return <h1>hellow word! </h1>;
// }
// it must be start with capital leter
// function Description() {
//   return <h2>thi is other component</h2>;
// }




// app function self is  component  that return this are UI of our web page
function App() {

// App()  return only one component it a time if you return multiple it onece so use div 
  return (
    <div>
      <h1>hellow word!</h1>
      <p>Lorem ipsum dolor sit amet co</p>
      <ProductTab servic= "bestone"></ProductTab>
    

      {/* <Title></Title>;
      <Title></Title>;
      <Title></Title>; */}
      {/* <Description />; */}
    </div>
  );
}

export default App
