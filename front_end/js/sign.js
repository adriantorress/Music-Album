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


// cadastro

const urlCadastro = "http://localhost:3000/sign-up"

const cadastrar = document.getElementById("send")

cadastrar?.addEventListener("click", e => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirmation = document.getElementById("passwordConfirmation").value;
  const number = document.getElementById("number").value;
  const gender = document.querySelector("input[name='gender']").value;

  if (password === passwordConfirmation) {
    const data = {
      firstName,
      lastName,
      username,
      email,
      password,
      number,
      gender
    }
    axios.post(urlCadastro, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error.response.data));
  }
  else {
    alert("As senha estão diferentes!")
  }

})

//login
const urlLogin = "http://localhost:3000/sign-in"
const logar = document.getElementById("enviar")

logar?.addEventListener("click", e => {
  e.preventDefault();

  const ent = document.getElementById("ent").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  const data = { ent, passwordLogin };

  axios.post(urlLogin, data)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error.response.data));

})


















