// Axios // read axios readme file must or doucumentation
// Library to make HTTP requests
// axios use internally fatch but this is more compact way to send requist

// better method to access data not need to parse it 

// axios github link and install(also but) or CDN LINK COPY AND PASTE IN HTML file
// axios is a library





// let btncat = document.querySelector("button");
// btncat.addEventListener("click", async () => {
//     // console.log("button was clicked");
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// });


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res);
//         // console.log(res.data.fact);
//         return res.data.fact;
//     }
//     catch (e) {
//         // console.log("ERROR - ", e);
//         return "no fact found ";
//     }
// }







// lecture 2
// most free api have limit canot apply loop in api call the block you if call 



// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   let img = document.querySelector("#resultdog");
//   img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     return "no image found";
//   }
// }


// console.log(getImage());








// lecture 3
// Axios
// sending Headers
let url2 = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    // Correct the headers object
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url2, config); // Fetch the joke with the correct headers
    console.log(res.data); // Output the joke data in the console
  } catch (err) {
    console.log("Error fetching joke:", err); // Handle any errors
  }
}

getJokes();
