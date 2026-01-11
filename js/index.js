// FAQ Accordion
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
  // Header scroll visibility
  const header = document.querySelector(".header");
  const socialIcons = document.querySelector(".social-icons");

  if (header && socialIcons) {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight;
      if (window.scrollY > scrollThreshold) {
        header.classList.add("is-visible");
        socialIcons.classList.add("is-visible");
      } else {
        header.classList.remove("is-visible");
        socialIcons.classList.remove("is-visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  // Modal window
  const openButton = document.querySelector(".headerButton");
  const closeButton = document.querySelector(".sign-tour__close");
  const modal = document.querySelector(".sign-tour");
  const overlay = document.querySelector(".sign-tour__overlay");

  if (modal && openButton && closeButton && overlay) {
    const closeModal = () => {
      modal.style.opacity = "0";
      modal.style.visibility = "hidden";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };

    openButton.addEventListener("click", () => {
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    });

    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  }

  // Tour cards population
  const tourCards = document.querySelectorAll(".tour-card-main");
  if (tourCards.length > 0) {
    const infoTours = [
      {
        title: "Peak Ulyabor and Lake Serebryanoye",
        days: "3 days",
        image: "../images/KYRG2748.jpg",
        description: "Mountains, marals, eco-trail, waterfall"
      },
      {
        title: "Peak Lenin and Lake Issyk-Kul",
        days: "5 days",
        image: "../images/KYRG2760.jpg",
        description: "Mountains, lakes, eco-trail, waterfall, mineral springs"
      },
      {
        title: "Trekking in Ala-Archa and Surroundings",
        days: "2 days",
        image: "../images/KYRG2719.jpg",
        description: "Ala-Archa is a picturesque national park"
      }
    ];

    tourCards.forEach((card, index) => {
      const info = infoTours[index];
      if (!info) return;

      const titleEl = card.querySelector(".tour-card__title");
      const daysEl = card.querySelector(".tour-card__duration");
      const descEl = card.querySelector(".tour-card__description");
      const imageEl = card.querySelector(".tour-card");

      if (titleEl) titleEl.textContent = info.title;
      if (daysEl) daysEl.textContent = info.days;
      if (descEl) descEl.textContent = info.description;
      if (imageEl) imageEl.style.backgroundImage = `url(${info.image})`;
    });
  }

  // Navigation active state
  const navItems = document.querySelectorAll(".reise__nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
