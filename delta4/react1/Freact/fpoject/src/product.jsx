import "./product.css";


// function Product(props) {
//     console.log(props);
    
//     return (
//         <div className= "Product">
//             <h2 id="one">{ props.title}</h2>
//             <h5>prodcut Description</h5>
//         </div>

//     )
// }

// better way to implement as the above with obj destructuring
// function Product({ title, price, featurs, obj1 }) {
//   console.log(featurs);
//   // let list = featurs.map((feature) => <li>{feature}</li>) // this give erro so correct with Add a Fallback (|| [])
//   let list = (featurs || []).map((feature, index) => (
//     <li key={index}>{feature}</li>
//   ));

//   return (
//     <div className="Product">
//       <h2 id="one">{title}</h2>

//       <h5>prodcut Description Rs{price}</h5>
//       {/* <h4>{list}</h4> */}
//       <ul>{list}</ul>

//       {/* <p>{featurs }</p> */}

//       {/* the format obj1 && <p>{obj1.a}</p> is a common JavaScript pattern known as short-circuit evaluation. This pattern ensures that your code doesn't try to access properties of an object that might be null or undefined, which would cause an error. */}

//       {obj1 && <h3>{obj1.b}</h3>}
//     </div>
//   );
// }




// lecture 2 4
function Product({ title, price}) {
  //   if (price > 3000) {
  //     return (
  //       <div className="Product">
  //         <h2 id="one">{title}</h2>
  //         <h5>prodcut Description Rs{price}</h5>
  //         <p>Discount of 5%</p>
  //       </div>
  //     );

  //   }
  //   else {
  //        return (
  //          <div className="Product">
  //            <h2 id="one">{title}</h2>
  //            <h5>prodcut Description Rs{price}</h5>
  //          </div>
  //        );
  //   }
  // }


  // best way to implement the above one 
  // let isDiscount = price > 3000 ? "5%" : "";

   
    // return (
    //   <div className="Product">
    //     <h2 id="one">{title}</h2>
    //     <h5>prodcut Description Rs{price}</h5>
    //     {/* <p>{ isDiscount}</p> */}
    //     {/* <p>{price > 3000 ? "5%" : ""}</p> */}
    //     {/* best  to implement the above to aviod the extra node so use p tag inside the ternary oprator  */}
    //     {price >= 1000 ? <p>Discount : 5%</p> : null}
    //   </div>
    // );
    
    
    
    //  2 5
    // to color on the basis of the condition 
    // best to store in variable which are repeat 
  let isDiscount = price >= 1000;
    let styles = { backgroundColor: isDiscount ? "red" : "" };
  return (
      <div className="Product" style={styles}>
        <h2 id="one">{title}</h2>
        <h5>prodcut Description Rs{price}</h5>

        {isDiscount ? <p>Discount : 5%</p> : null}
      </div>
    );
  
}



export default Product;