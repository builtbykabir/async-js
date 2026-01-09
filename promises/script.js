const rejectBtn = document.querySelector(".reject-btn");
const resolveBtn = document.querySelector(".resolve-btn");

const myPromise = new Promise((resolve, reject) => {
  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=>{
    console.log('Promise Settled')
  })
