document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
      question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          const button = question.querySelector("button");
          const isOpen = answer.classList.contains("visible");

          document.querySelectorAll(".answer").forEach(ans => ans.classList.remove("visible"));
          document.querySelectorAll(".question button").forEach(btn => btn.textContent = "^");

          if (!isOpen) {
              answer.classList.add("visible");
              button.textContent = "v"; 
          }
      });
  });
});
