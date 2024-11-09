// API
// application programing interface
// API  => API use to interacte between two software
// web API => USE  http protocole
// api -> give data in the from of json foramte
// api -> work as a waiter


// apiendpoint mean url which use to communicate with other app







// lecture 5
// (api is link in which we send request and send response some data .. send request api using code not search)
//  boot acount (twiter) api ==?
// api endpoint ? (url)
// api key ?
// normal api no need key not paid to use

// json FormData use for computer
// API
// some random apis (ssend data in json foramte)
// https://catfact.ninja/fact  (sends random cat facts)
// https://www.boredapi.com/api/activity  (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

// google -> google maps api

// every api have documentataion must to read documentation of it when to use it







// lecture 6
// JSON
// json not only exsit in js it also use other language it is only format of data to send (as manay send different foramate cash online trnasiction ... )
// javascript Object notation    // www.json.org
// first time api use xml foramte but now use json foramte store api data
// xml ( extansible markup language)
// js obj key not string while json key in string formate(without string give erorr)
// undefine not use in json
// json validetor use to validate json data the in correct formate or not  =?







// lecture 7
// JSON
// JSON data present in string form

let jsonRes = '{"fact":"The domestic cat is the only species able to hold its tail vertically while walking. You can also learn about your cats present state of mind by observing the posture of his tail.","length":180}'
console.log(typeof jsonRes);
console.log(jsonRes);

// accessing Data from JSON
// JSON.parse(data) method
//to parse a string data into a js object

console.log(jsonRes.fact);// give undife b/c the string formate use parse mthod to convert into object formate


// parse mean to convert one data to other formate 


let validRes = JSON.parse(jsonRes);
console.log(typeof validRes);
console.log(validRes);
console.log(validRes.fact);
// use when use other api


// * JSON.stringify(json) method
// to parse a js object data into json opposite of parse
// use if create self api 

let student = { 
    namee: "khan",
    roll_No: 23,
    class : "5th"
}

let tojson= JSON.stringify(student);

console.log(tojson);
console.log(typeof tojson);







// lecture 8
// testing API requests
// tools (developer use)
// hoppscoth (but best to use now new  online )
// postman (old )
// both work same almost have same interface but if use postman downlod and hoppscotch use online

// url or endpoint of api past in hopscotch send data 