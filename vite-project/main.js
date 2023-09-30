import "./style.css";

import { fetchDogBreedNames } from "./utils/dogApi";

// import { animals } from "./utils/dog";
// // import { allDogs } from "./utils/dog";

// function printDogs() {
//   animals.sayHello();
//   // console.log(animals);
// }

// document.querySelector("#app").innerHTML = `<h1>Hello world</h1>`;
// printDogs();

async function start() {
  try {
    const res = await fetchDogBreedNames();
    // console.log(res.data.message);
    const dogNames = res.data.json();
    console.log(dogNames);
  } catch (error) {
    console.log(error);
  }
}

start();
