// delta4\react2\project
// explain in preveis 



// lecture 1
// React Props
// propes are the information that you pass to a JSX tag(when call as like function parameter).

{/* <Product title="phone" price="30k" />
<Product title="laptop" price= {30000} /> */}

export default function Product({ title, price }) {
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    )
}







// lecture 2
// Passing Arrays to Props
// features = { ["fast", "reliable"]};
// features = { [a: "fast", b: "realiable"]}


// lecture 2
// Rendering Array  
// not send array -> arry of element 




