import axios from "axios";

const fetchDogBreedNames = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};

const fetchRandomDogImage = () => {
  return axios.get("https://dog.ceo/api/breeds/image/random");
};

export const dogceo = {
  fetchDogBreedNames,
  fetchRandomDogImage,
};
