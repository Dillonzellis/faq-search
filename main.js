const searchInput = document.getElementById("search-input");
const resultsFail = document.getElementById("results-fail");
const generalQA = document.querySelector("#generalQA");

const generalCards = generalQA.querySelector(".card")
  ? generalQA.querySelectorAll(".card")
  : null;

const generalQuestions = [];

generalCards.forEach((card) => {
  generalQuestions.push(card);
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  generalCards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // if no matches show message in generalQuestions show message
  if (generalQuestions.every((card) => card.style.display === "none")) {
    // add class to resultsFail
    resultsFail.classList.add("block");
    // generalQA.innerHTML = `<p class="fail-msg text-center">No matches found</p>`;
  }

  // if any matches remove class from resultsFail
  if (generalQuestions.some((card) => card.style.display === "block")) {
    resultsFail.classList.remove("block");
  }

  // reset page to where it was before
  if (searchValue === "") {
    resultsFail.classList.remove("block");
    generalCards.forEach((card) => {
      card.style.display = "block";
    });
  }
});
