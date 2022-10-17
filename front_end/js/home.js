var off;

const btnEye = document.querySelectorAll(".fa-solid")

const home = document.querySelector(".home")

const aHome = document.getElementById("a-home")
const aCadastreSe = document.getElementById("cadastre-se")
const aLogin = document.getElementById("a-entrar")

const header = document.getElementById("header")
const signIn = document.getElementById("sign-in")
const signUp = document.getElementById("sign-up")

const urlCadastro = "http://localhost:3000/sign-up"
const urlLogin = "http://localhost:3000/sign-in"

const inputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')

const cadastrar = document.getElementById("send")
const logar = document.getElementById("enviar")

let gender = document.querySelectorAll("input[name='gender']");

let genderSelected;


gender.forEach((e) => {
  e.addEventListener("change", () => {
    genderSelected = document.querySelector("input[name='gender']:checked").value;
  })

})


off = setTimeout(homeToggle, 3000);


aHome.addEventListener("click", event => {
  homeToggle();
  limparFormulario(inputs)
  limparDecoracao(labels)

})


aCadastreSe.addEventListener("click", event => {
  loginToggle();
  inputs[3].focus();
  limparFormulario(inputs)
  limparDecoracao(labels)
})


aLogin.addEventListener("click", event => {
  loginToggle();
  inputs[0].focus();
  limparFormulario(inputs)
  limparDecoracao(labels)
})


inputs.forEach((input) => {

  input.addEventListener("focusin", (e) => {
    labels.forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        label.setAttribute('style', 'font-size:13px; margin-top:0; color: #4086e0')
        input.setAttribute('style', 'border-color:#4086e0')
      }

      input.addEventListener("keyup", (e) => {
        labels.forEach((label) => {
          if (input.id === "firstName" && input.value.length < 3) {
            if (`label-${input.id}` === `${label.id}`) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Nome *Insira no mínimo 3 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
          }
          else if (input.id == "lastName" && input.value.length < 4) {
            if (`label-${input.id}` === `${label.id}`) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Sobrenome *Insira no mínimo 4 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
          }
          else {
            if (input.id == "firstName" && `label-${input.id}` === `${label.id}`) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Nome"
              input.setAttribute('style', 'border-color:green')
            }
            else if (input.id == "lastName" && `label-${input.id}` === `${label.id}`) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Sobrenome"
              input.setAttribute('style', 'border-color:green')
            }
          }

        })
      });
    })
  });

  input.addEventListener("focusout", (e) => {
    labels.forEach((label) => {

      if (((input.id === "firstName" && input.value.length >= 3) || (input.id === "lastName" && input.value.length >= 4)) && `label-${input.id}` === `${label.id}`) {
        label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
      }
      else if (((input.id === "firstName" && input.value.length < 3) || input.id === "lastName" && (input.value.length < 4)) && `label-${input.id}` === `${label.id}` && input.value.length > 0) {
        label.removeAttribute("style")
        label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
      }
      else if ((input.id === "firstName" || input.id === "lastName") && `label-${input.id}` === `${label.id}` && input.value.length == 0) {
        label.removeAttribute("style")
        if (input.id == "firstName") {
          label.innerHTML = "Nome"
          input.setAttribute('style', 'border-color:#084088')
        }
        else if (input.id == "lastName") {
          label.innerHTML = "Sobrenome"
          input.setAttribute('style', 'border-color:#084088')
        }
      }
      else if (input.value === "") {
        if (`label-${input.id}` === `${label.id}`) {
          label.removeAttribute('style')
          input.setAttribute('style', 'border-color:#084088')
        }
      }
      else {
        if (`label-${input.id}` === `${label.id}`) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: #084088')
          input.setAttribute('style', 'border-color:#084088')
        }
      }
    });

  });
});


cadastrar?.addEventListener("click", e => {

  e.preventDefault();
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
  limparFormulario(inputs)
  limparDecoracao(labels)

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
  limparFormulario(inputs)
  limparDecoracao(labels)

})


btnEye.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let inputBtn = [inputs[1], inputs[7], inputs[8]]
    inputBtn.forEach((input) => {
      if (input.type == "password" && `btn-${input.id}` === `${btn.id}`) {
        input.setAttribute('type', 'text')
        btn.classList.toggle("fa-eye-slash")
        btn.classList.toggle("fa-eye");
      }
      else if (input.getAttribute("type") == "text" && `btn-${input.id}` === `${btn.id}`) {
        input.setAttribute('type', 'password')
        btn.classList.toggle("fa-eye-slash")
        btn.classList.toggle("fa-eye");
      }
    })
  });
});


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
  }
  else if (signIn.classList.contains("off")) {
    signIn.classList.toggle("off");
    signIn.classList.toggle("container");
    signUp.classList.toggle("off");
    signUp.classList.toggle("container");

  }
}


function limparFormulario(inputForm) {
  inputForm.forEach(input => {
    if (input.id != "send" && input.id != "enviar")
      input.value = ""
  })
}


function limparDecoracao(labelForm) {
  labelForm.forEach(label => {
    if (label.id != "label-ent" && label.id != "label-firstName") {
      label.removeAttribute("style")
    }
  })
}