"use strict";

const colorsSelectors = document.querySelectorAll(".color");
const faqBtns = document.querySelectorAll(".question-title button");
const heroImg = document.querySelector(".hero-image-img");
const sectionFingerPrint = document.querySelector(".all-pixels-colors");

//HEADER INTRO

window.addEventListener("load", (e) => {
  heroImg.classList.add("show-hero-img");
});

// COLOR PICKER
const colorPicker = function (e) {
  let clrID = e.target.id;
  if (e.target.classList.contains(clrID)) {
    colorsSelectors.forEach((btn) => btn.classList.remove("color-selected"));
    e.target.classList.add("color-selected");
    document.getElementById("color-name").textContent =
      e.target.dataset.clrName;
    heroImg.src = `images/pixel-4A-5G-${clrID}.png`;
  }
};

colorsSelectors.forEach((btn) => {
  btn.addEventListener("click", colorPicker);
});

//ANIMATIONS ON SCROLL
sectionFingerPrint.classList.add("fingerprint-section-hidden");
const revealFingerprintSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("fingerprint-section-hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealFingerprintSection, {
  root: null,
  threshold: 0.15,
});

observer.observe(sectionFingerPrint);

//FAQ REVEAL
const revealQuestion = function (e) {
  const allQuestions = document.querySelectorAll(".faq-questions");
  const questionChevrons = document.querySelectorAll(".faq-questions i");
  allQuestions.forEach((question) =>
    question.classList.remove("question-is-active")
  );
  questionChevrons.forEach(
    (chevron) => (chevron.style.transform = "rotate(0deg)")
  );
  let questionSelected = e.currentTarget.parentElement.parentElement;
  questionSelected.classList.toggle("question-is-active");
  if (questionSelected.classList.contains("question-is-active")) {
    e.target.style.transform = "rotate(90deg)";
  }
};

faqBtns.forEach((faqBtn) => faqBtn.addEventListener("click", revealQuestion));
