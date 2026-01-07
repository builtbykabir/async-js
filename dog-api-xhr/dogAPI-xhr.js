const url = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  // xhr.addEventListener("load", () => {
  //   console.log(xhr);
  //   img.src = JSON.parse(xhr.response).message;
  // });
  xhr.onload = () => {
    console.log(xhr);
    img.src = JSON.parse(xhr.response).message;
  }
  xhr.open("GET", url);
  xhr.send();
});
