document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    $("body").blur();
    $("#loading-indicator").text("Loading");
  } else {
    $("#loading-indicator").text("");
  }
};

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
    complete: function () {
      console.log("API request completed");
    },
  });
}

function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed");
    },
  });
}

function fetchDogImage() {
  $("#imageBtn").click(function () {
    let dogBreed = "sheepdog";
    getRandomImageOfDog(dogBreed);
    $("imgageDiv").append(
      `<img src="https://dog.ceo/api/breed/${dogBreed}/images/random">`
    );
  });
}

function addOption(selectDog) {
  console.log(selectDog[0]);
  for (let i = 0; i < selectDog.length; i++) {
    let dogName = selectDog[i];
    $("#dogBreed").append(`<option value="${dogName}">
      ${dogName}
  </option>`);
  }
}

$(document).ready(function () {
  getAllDogsFromApi();
  fetchDogImage();
});
