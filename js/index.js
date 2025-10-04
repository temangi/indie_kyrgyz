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


document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".headerButton");
  const closeButton = document.querySelector(".sign-tour__close");
  const modal = document.querySelector(".sign-tour");

  openButton.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  });

  closeButton.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
});