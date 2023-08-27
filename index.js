const errorMessage = document.querySelector(".container form .error-message");
const input = document.querySelector(".container form input");
const email = document.querySelector(".dashboard");
const form = document.querySelector(".container form");
const button = document.querySelector(".container form button");

form.addEventListener("submit", (e) => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorMessage.textContent = "";
    } else {
      e.preventDefault();
      errorMessage.style.display = "block";
      input.style.border = "1px solid var(--Light_Red)";
      input.style.color = "var(--Light_Red)";
    }
  } else {
    e.preventDefault();
    errorMessage.style.display = "block";
    input.style.border = "1px solid var(--Light_Red)";
    input.add((input.placeholder.style.color = "var(--Light_Red)"));
    input.style.color = "var(--Light_Red)";
  }
});
