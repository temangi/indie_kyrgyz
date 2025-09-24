const questions = document.querySelectorAll(".answer__item");

questions.forEach((questionItem) => {
  const toggleButton = questionItem.querySelector(".answer__question-toggle");
  const answerText = questionItem.querySelector(".answer__answer-text");

  questionItem.addEventListener("click", () => {
    toggleButton.classList.toggle("answer__question-toggle-active");
    answerText.classList.toggle("answer__answer-text_hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const myHiddenElement = document.querySelector(".header");
  const socialIcons = document.querySelector(".social-icons");

  function handleScroll() {
    const viewportHeight = window.innerHeight;
    const scrollThreshold = viewportHeight;

    if (window.scrollY > scrollThreshold) {
      myHiddenElement.classList.add("is-visible");
      socialIcons.classList.add("is-visible");
    } else {
      myHiddenElement.classList.remove("is-visible");
      socialIcons.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

const tops = document.querySelectorAll(".reise__content-item");

tops.forEach((topItem, index) => {
  topItem.style.background = `url('./images/slide${index + 1}.jpg')`;
  topItem.style.backgroundPosition = "center";
  topItem.style.backgroundSize = "cover";
});

const imgs = [
  "./images/slide1.jpg",
  "./images/slide2.jpg",
  "./images/slide3.jpg",
  "./images/slide4.jpg",
  "./images/slide5.jpg",
  "./images/slide6.jpg",
  "./images/slide7.jpg",
  "./images/slide8.jpg",
  "./images/slide9.jpg",
  "./images/slide10.jpg",
  "./images/slide11.jpg",
  "./images/slide12.jpg",
];

const tours = document.querySelectorAll(".tour-card");

tours.forEach((tourCard, index) => {
  tourCard.style.background = `url('${imgs[index]}')`;
  tourCard.style.backgroundPosition = "center";
  tourCard.style.backgroundSize = "cover";
});
