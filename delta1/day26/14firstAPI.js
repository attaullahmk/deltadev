// first request send by -> xml http request obj -> that obj have different method
// not work promise consept with it 

// OUR FIRST Request
// using Fetch
// fetch(url)



//catfact api url
let url = "https://catfact.ninja/fact";

//fetch method return promises in responce
// fetch(url);
// that show in network tab in response 


// return Promise so use Promise method 
fetch(url)
    .then((Response) => {
        // this responce send data but not readable
        // console.log(Response);
        // to make readable use
        // console.log(Response.json());

        // Response.json().then((data) => {
        //     console.log(data);

        // better way 
        return Response.json();
        // })
        
    }).then((data) => {
    // console.log(data);
        console.log("data1 = ", data.fact);
        return fetch(url);
    }).then((responce) => {
        return responce.json();
    
    }).then((data2) => {
        console.log("data2 = " , data2.fact);
    })
    .catch((err) => {
    console.log("ERROR - ", err);
    
    })


console.log("i am happy");
    




// lecture 15
// Our frist request
// using fetch with async / await

async function getFacts() {
    try {
        let res1 = await fetch(url);
        // console.log(res1); // give undifine b/c the not wait so mybe result not come so print undifine 
        // use await keyword if res1 not complete untill no execution ...
        let data1 = await res1.json();
        console.log("data1 - ", data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2.fact);
    }
    catch (e) {
        console.log("error : ", e);
    }

    console.log("byyee");
}
getFacts();

