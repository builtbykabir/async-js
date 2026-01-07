const url = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("Received Data From API");
      console.log(json.message);
      img.src = json.message;
    });
});
