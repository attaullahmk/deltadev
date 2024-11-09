import Product from "./product.jsx";

function ProdcutTab() {
    // let option = ["hi-tech", "durable", "fast"];
    // let option2 = { a: "hi", b: "py", c: "toye" };
    
    
    // leture 3 
    // let option = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
    let option = ["hi-tech", "durable", "fast"];


    return (
      <>
        <Product title="phone" price={3000} feature={option}></Product>
            

        <Product
          title="laptop"
        //   option2={{ a : "hi", b: "py", c: "toye" }}
        ></Product>
            


        <Product title="pen" price={21 / 3}></Product>
      </>
    );
}

export default ProdcutTab;