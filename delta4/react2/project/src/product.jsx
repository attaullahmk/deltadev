import "./product.css";
// function Product(props) {
// best way of destructuring
    // defualt arg 
function Product({ title, price, feature, option2 }) {
    const list = feature.map((featur) => <li>{featur}</li>);
  return (
    <div className="Product">
      <h2 id="one">{title}</h2>
      <h5>prodcut PRice {price}</h5>
          {/* <p>{feature}</p> */}
    <p>{ list}</p>
          {/* <p>{option2.b}</p>  */} 
          {/*  not work for obj */}
    </div>
  );
}




export default Product;