var off;
const home = document.querySelector(".home")

const aHome = document.getElementById("a-home")
const aCadastreSe = document.getElementById("cadastre-se")
const aLogin = document.getElementById("a-entrar")

const header = document.getElementById("header")
const signIn = document.getElementById("sign-in")
const signUp = document.getElementById("sign-up")

const urlCadastro = "http://localhost:3000/sign-up"
const urlLogin = "http://localhost:3000/sign-in"

let gender = document.querySelectorAll("input[name='gender']");

let genderSelected;

gender.forEach((e) => {
  e.addEventListener("change", () => {
    genderSelected = document.querySelector("input[name='gender']:checked").value;
  })

})

const inputs = document.querySelectorAll('input')

const cadastrar = document.getElementById("send")
const logar = document.getElementById("enviar")

off = setTimeout(homeToggle, 3000);

aHome.addEventListener("click", event => {
  homeToggle();
})

aCadastreSe.addEventListener("click", event => {
  loginToggle();
})

aLogin.addEventListener("click", event => {
  loginToggle();
})

function homeToggle() {
  if (home.classList.contains("home")) {
    home.classList.toggle("home")
    home.classList.toggle("off")
    header.classList.toggle("off");
    header.classList.toggle("header");
    signIn.classList.toggle("off");
    signIn.classList.toggle("container")
  }
}

function loginToggle() {
  if (signIn.classList.contains("container")) {
    signIn.classList.toggle("off");
    signIn.classList.toggle("container");
    signUp.classList.toggle("off");
    signUp.classList.toggle("container");
    ent.focus();
  }
  else if (signIn.classList.contains("off")) {
    signIn.classList.toggle("off");
    signIn.classList.toggle("container");
    signUp.classList.toggle("off");
    signUp.classList.toggle("container");
    firstName.focus();
  }
}

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener("focusin", (e) => {
    document.querySelectorAll('label').forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        label.setAttribute('style', 'font-size:13px; margin-top:0; color: #4086e0')
      }
    })
  });
  input.addEventListener("focusout", (e) => {
    document.querySelectorAll('label').forEach((label) => {
      if (input.value === "") {
        if (`label-${input.id}` === `${label.id}`) {
          label.removeAttribute('style')
        }
      }
      else {
        if (`label-${input.id}` === `${label.id}`) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: #084088')
        }
      }
    });
  });
});

cadastrar?.addEventListener("click", e => {

  e.preventDefault();
  console.log("cadastrando")
  if (inputs[7].value === inputs[8].value) {
    let data = {
      firstName: inputs[3].value,
      lastName: inputs[4].value,
      username: inputs[5].value,
      email: inputs[6].value,
      password: inputs[7].value,
      number: inputs[9].value,
      gender: genderSelected
    }
    axios.post(urlCadastro, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error.response.data));
  }
  else {
    console.log({ error: "As senha estão diferentes!" })
  }

})

logar?.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    ent: inputs[0].value,
    passwordLogin: inputs[1].value
  };

  axios.post(urlLogin, data)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error.response.data));

})
