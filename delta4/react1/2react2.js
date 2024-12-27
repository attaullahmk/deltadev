// delta4\react2\project

// lecture 1
// React Props
// propes are the information that you pass to a JSX tag(as like when call as like function parameter).

{
  /* <Product title="phone" price="30k" />
<Product title="laptop" price= {30000} /> */
}

export default function Product({ title, price }) {
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
}







// lecture 2
// Passing Arrays to Props
// features = { ["fast", "reliable"]};
// features = { [a: "fast", b: "realiable"]}








// lecture 3
// Rendering Array
// not send array as array  -> arry pass as  element mean the array element close in li tage
// best way to emplement with map function when recive in the component implementation time and some change as like enclose in li tag 





//lecture 4
// conditionals
// adding elements on the basis of some condition
{
  price >= 1000 ? <p>Discount : 5%</p> : null;
}

// or

{
  price >= 1000 && <p>Discount : 5%</p>;
}
// for end condition first check one if ture than next will be checked if ture ..




// lecture 5
//Dynamic component Styling
// mean to change color on the basis of some condition




// lecture 6
// Activity
// show a hello message to the user in different colors.
// pass 2 values as props : userName $ textColor
// explain in msgBox.jsx

// lecture 7
// intall react developer tools
// must to explore





// this one must try to create itself 
// activity to create amozon cards show title description price > old and new
