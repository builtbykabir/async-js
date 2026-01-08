const blockButton = document.querySelector(".block");

blockButton.addEventListener("click", () => {
  const startTime = Date.now();
  let currentTime = startTime;

  while (startTime + 10000 > currentTime) {
    currentTime = Date.now();
  }
});
