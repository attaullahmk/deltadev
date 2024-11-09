const universities = [
  // Your array of university objects
  {
    domains: ["aiims.ac.in"],
    "state-province": null,
    country: "India",
    web_pages: ["http://www.aiims.ac.in/"],
    name: "All India Institute of Medical Sciences",
    alpha_two_code: "IN",
  },
  {
    domains: ["nls.ac.in"],
    "state-province": null,
    country: "India",
    web_pages: ["http://www.nls.ac.in/"],
    name: "National Law School of India University",
    alpha_two_code: "IN",
  },
  {
    domains: ["iitj.ac.in"],
    "state-province": "Rajasthan",
    country: "India",
    web_pages: ["http://www.iitj.ac.in/"],
    name: "Indian Institute of Technology, Jodhpur",
    alpha_two_code: "IN",
  },
  {
    domains: ["iiitkota.ac.in"],
    "state-province": "Rajasthan",
    country: "India",
    web_pages: ["http://iiitkota.ac.in/"],
    name: "Indian Institute of Information Technology, Kota",
    alpha_two_code: "IN",
  },
  {
    domains: ["iisc.ernet.in"],
    "state-province": "Karnataka",
    country: "India",
    web_pages: ["http://www.iisc.ernet.in/", "http://iisc.ac.in/"],
    name: "Indian Institute of Science",
    alpha_two_code: "IN",
  },
  // more universities
];

// console.log(universities[1].name);

const stateProvince = "Rajasthan";

const filteredUniversities = universities.filter(
  (university) => university["state-province"] === stateProvince
);

console.log(filteredUniversities);
