function initLottery() {
 const Lotbutton = document.querySelector(".lotteryB")
 const results = document.querySelector(".results-lottery")
 results.style.display ="none";
 Lotbutton.addEventListener('click', (event) => {
  results.style.display = "block";
 });
}

export {initLottery};

function initEuroJack() {
 const Eurobutton = document.querySelector(".eurojackB")
 const results = document.querySelector(".results-eurojack")
 results.style.display ="none";
 Eurobutton.addEventListener('click', (event) => {
  results.style.display = "block";
 });
}

export {initEuroJack};

function initPrimi() {
 const Primibutton = document.querySelector(".primitiveB")
 const results = document.querySelector(".results-primitive")
 results.style.display ="none";
 Primibutton.addEventListener('click', (event) => {
  results.style.display = "block";
 });
}

export {initPrimi};
