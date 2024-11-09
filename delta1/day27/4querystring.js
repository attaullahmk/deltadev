// Axios
// Updataing Query String

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  console.log("button was clicked");
  let country = document.querySelector("input").value;
  let state = document.querySelector("#state").value;
  // let country = "india";
  console.log(country);
  getColleges();
//   let CollArr = await getColleges(country);
//   console.log(CollArr);
//   show(CollArr);

  
  
  
  //find by state
  let CollArr = await getColleges(country);
//   const stateProvince = "Rajasthan"; // india
  const stateProvince = state;

  const filteredUniversities = CollArr.filter(
    (university) => university["state-province"] === stateProvince
    );
    
  show(filteredUniversities);
});


function show(CollArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of CollArr) {
    // console.log(col);
    // console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    // console.log(res);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("error : ", e);
    return [];
  }
}


 
