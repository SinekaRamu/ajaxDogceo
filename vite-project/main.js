import "./style.css";

import { dogCeo } from "./utils/dogApi";

// import { animals } from "./utils/dog";
// // import { allDogs } from "./utils/dog";

// function printDogs() {
//   dogCeo.fetchRandomDogImage();
//   console.log(dogCeo);
// }

document.querySelector("#app").innerHTML = `
<div class="selectionDiv">
<h1>DOG API PROJECT</h1>
<label for="dogBreed">Choose your Dog: </label>
<select name="selectDogBreed" id="selectDogBreed">
  <option selected disabled>dog breeds</option>
</select>
</div>
<button id="imageBtn">Fetch dog image</button>
<div id = "loading-indicator"></div> 
<div id="imageDiv">
<img  />
</div>`;

// printDogs();
async function start() {
  try {
    const res = await dogCeo.fetchDogBreedNames();
    // const dogImageUrl = res.data.message;
    console.log(res.data.message);
    const selectedDog = Object.keys(res.data.message);
    console.log(selectedDog);
    addOption(selectedDog);
  } catch (error) {
    console.log(error);
  }
}
// async function start() {
//   try {
//     const res = await dogCeo.fetchRandomDogImage();
//     const dogImageUrl = res.data.message;
//     displayDogImage(dogImageUrl);
//   } catch (error) {
//     console.log(error);
//   }
// }

start();

function displayDogImage(img) {
  const imgBox = document.querySelector("#imageDiv img");
  imgBox.src = img;
}

function addOption(selectDog) {
  const dropDownList = document.querySelector("#selectDogBreed");
  for (let i = 0; i < selectDog.length; i++) {
    let dogName = selectDog[i];
    const option = document.createElement("option");
    option.value = `${dogName}`;
    option.innerText = `${dogName}`;
    dropDownList.append(option);
    // dropDownList. = `<option value="${dogName}">${dogName}</option>`;
  }
}

// $("#imageBtn").click(function () {
//   const selectedDog = $("#selectDogBreed").val();
//   console.log(selectedDog);

//   getRandomImageOfDog(selectedDog);
// });
