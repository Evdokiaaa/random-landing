import "../scss/style.scss";
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
const members = document.querySelectorAll(".members__main-card");
const memberRightBtn = document.querySelector(".members__right-btn");
const memberLeftBtn = document.querySelector(".members__left-btn");
const membersCurrentCount = document.querySelector(".members__current"); //Счетчик слайдов

let currentMember = 0;
const totalMembers = members.length;
let slidesToShow = window.innerWidth <= 1200 ? 1 : 3;

function updateSlide() {
  members.forEach((member) => (member.style.display = "none"));

  for (let i = currentMember; i < currentMember + slidesToShow; i++) {
    if (i < totalMembers) {
      members[i].style.display = "block";
    }
  }
}
function updateCounter() {
  membersCurrentCount.textContent = currentMember + 1;
}
memberRightBtn.addEventListener("click", () => {
  if (currentMember + slidesToShow < totalMembers) {
    currentMember += slidesToShow;
  } else {
    currentMember = 0; // Возврат к первому
  }
  updateCounter();
  updateSlide();
});
memberLeftBtn.addEventListener("click", () => {
  if (currentMember - slidesToShow >= 0) {
    currentMember -= slidesToShow;
  } else {
    currentMember = Math.max(totalMembers - slidesToShow, 0); // Переход к последним
  }
  updateCounter();
  updateSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  updateSlide();
  updateCounter();
});
window.addEventListener("resize", () => {
  slidesToShow = window.innerWidth <= 1200 ? 1 : 3;
  counter = 0;
  updateSlide();
});
