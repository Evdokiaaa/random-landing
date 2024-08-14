const stageCards = document.querySelectorAll(".stages__item");
const stageLeftBtn = document.querySelector(".stages__left-btn");
const stageRightBtn = document.querySelector(".stages__right-btn");
const stageDots = document.querySelectorAll(".stages__dots svg");

let currentState = 0;

function reset() {
  stageDots.forEach((item) => item.classList.remove("stages__dots-active"));
  stageCards.forEach((card) => card.classList.remove("stages__item-active"));
}
//Активируем кружок и карточку показываем

function activateStage(i) {
  stageCards[i].classList.add("stages__item-active");
  stageDots[i].classList.add("stages__dots-active");
  stageLeftBtn.disabled = i === 0;
  stageRightBtn.disabled = i === 4;
}
stageLeftBtn.addEventListener("click", () => {
  currentState--;
  reset();
  activateStage(currentState);
});
stageRightBtn.addEventListener("click", () => {
  currentState++;
  reset();
  activateStage(currentState);
});
