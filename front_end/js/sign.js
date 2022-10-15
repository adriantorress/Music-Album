const sign_in = document.getElementById("sign-in");
const sign_up = document.getElementById("sign-up");

sign_in.addEventListener("click", event => {
  if (sign_in.classList.contains("changeColor")) { }
  else { sign_in.classList.add("changeColor") };
  if (sign_up.classList.contains("changeColor")) sign_up.classList.remove("changeColor");
})

sign_up.addEventListener("click", event => {
  if (sign_up.classList.contains("changeColor")) { }
  else { sign_up.classList.add("changeColor") };
  if (sign_in.classList.contains("changeColor")) sign_in.classList.remove("changeColor")
})