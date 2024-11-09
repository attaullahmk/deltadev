import Product from "./product.jsx";
import MasBox from "./msgBox.jsx";

// function ProdcutTab({ servic }) {
//     let featurs = ["hi", "to ", "every ", "one"];
//     // let featurs = [<li>"hi"</li>, <li>"hi"</li>,<li>"hi"</li>, "one"];
//     // how to pass it
//     //for obj
//     // let obj1 = {a : "hi", b : "tow", c : "three"}
//     // you can pass dircetly
//     return (
//       <>
//         <p>service {servic} </p>

//         <Product title="phone" price={23} featurs={featurs}></Product>
//             <Product title="electronic" price={23}></Product>
            
//         {/* <Product title="laptop" price={23} obj1={obj1}></Product> */}
//         <Product
//           title="laptop"
//           price={23}
//           obj1={{ a: "hi", b: "tow", c: "three" }}
//         ></Product>
//       </>
//     );
// }



//lecture  2 4 
function ProdcutTab({ servic }) {

  return (
    <>
      <p>service {servic} </p>
      <Product title="phone" price={23}></Product>
      <Product title="electronic" price={23}></Product>
      <Product title="laptop" price={31000}></Product>
      <MasBox userName={"khan"} textColor={"yellow"}> </MasBox>
    </>
  );
}

export default ProdcutTab;