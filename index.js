const form = document.getElementById("form-card");

const rateCard = document.getElementById("rate-card");
const thanksCard = document.getElementById("thanks-card");
const cardRateMessage = document.getElementById("card-rate-message");

form.addEventListener("submit", (e) => {
  const result = Object.fromEntries(new FormData(form));

  e.preventDefault();
  rateCard.classList.add("closing");
  
  setTimeout(() => {
    rateCard.classList.remove("closing");
    rateCard.classList.add("closed");
    cardRateMessage.innerHTML = `You selected ${result.radio} out of 5`;
    thanksCard.classList.add("show");
  }, 700);
});