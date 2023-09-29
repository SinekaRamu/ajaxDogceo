jQuery.ajaxSetup({
  beforeSend: function () {
    $("#loading-indicator").text("Loading...");
  },
  complete: function () {
    $("#loading-indicator").text("");
  },
  success: function () {},
});

function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      const selectDog = Object.keys(resp.message);
      console.log(selectDog);
      addOption(selectDog);
    },
    error: function () {
      console.log("Api request error");
    },
    // complete: function () {
    //   console.log("API request completed");
    // },
  });
}

function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      const DogImageurl = resp.message;
      displayDogImage(DogImageurl);
    },
    error: function () {
      console.log("Api request error");
    },
    // complete: function () {
    //   $("#loading-indicator").hide();
    //   console.log("API request completed");
    // },
  });
}

function displayDogImage(img) {
  $("#imageDiv img").attr("src", img);
}
// function fetchDogImage() {
$("#imageBtn").click(function () {
  const selectedDog = $("#selectDogBreed").val();
  console.log(selectedDog);

  getRandomImageOfDog(selectedDog);
});
// }

function addOption(selectDog) {
  console.log(selectDog[0]);
  for (let i = 0; i < selectDog.length; i++) {
    let dogName = selectDog[i];
    $("#selectDogBreed").append(
      `<option value="${dogName}">${dogName}</option>`
    );
  }
}

$(document).ready(function () {
  getAllDogsFromApi();
  //   fetchDogImage();
});
