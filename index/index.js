const textElement = document.getElementById("text");
const seeMoreLink = document.querySelector(".see-more");

seeMoreLink.addEventListener("click", () => {
  textElement.classList.toggle("expanded-text");
  textElement.classList.toggle("short-text");
  seeMoreLink.textContent = textElement.classList.contains("expanded-text")
    ? "See Less"
    : "See More";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("showa");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden ,.downward ,.upward");
hiddenElements.forEach((el) => observer.observe(el));
