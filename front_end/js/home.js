var off;

const btnEye = document.querySelectorAll(".fa-solid");

const home = document.querySelector(".home");

const aHome = document.getElementById("a-home");
const aCadastreSe = document.getElementById("cadastre-se");
const aLogin = document.getElementById("a-entrar");

const header = document.getElementById("header");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");

const urlCadastro = "http://localhost:3000/sign-up";
const urlLogin = "http://localhost:3000/sign-in";

const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

const cadastrar = document.getElementById("send");
const logar = document.getElementById("enviar");

let gender = document.querySelectorAll("input[name='gender']");

let genderSelected;

let password = document.getElementById("password");
let passLabel = document.getElementById("label-password");
let passwordConfirmation = document.getElementById("passwordConfirmation");
let confirmLabel = document.getElementById("label-passwordConfirmation");

let email = document.getElementById("email");
let labelEmail = document.getElementById("label-email");

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

let validarEmail = false;
email.addEventListener('keyup', event => {
  let tam = email.value.length
  let valor = email.value
  if ((tam < 5) || (!(valor.includes('.'))) || (valor.indexOf(' ') >= 0) || (!(valor.includes("@"))) || ((valor.includes("@") && valor.indexOf("@") < 1)) || ((((valor.includes("@") && valor.indexOf("@") >= 1) && tam >= 5) && ((tam - (valor.indexOf("@"))) < 4))) || (valor.includes('.') && (valor.indexOf('.') <= valor.indexOf('@'))) && !(valor.includes('.') && (valor.indexOf('.') - valor.indexOf('@') < 2)) || ((valor.includes('.') && (valor.indexOf('.') - valor.indexOf('@') >= 2) && ((tam - valor.indexOf('.')) <= 1)) || (valor.includes('.') && (tam - valor.indexOf('.') < 2)))) {
    labelEmail.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
    labelEmail.innerHTML = "Email *Incorreto"
    email.setAttribute('style', 'border-color:red')
    validarEmail = false;
  }
  else {
    labelEmail.removeAttribute('style');
    labelEmail.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
    labelEmail.innerHTML = "Email"
    email.setAttribute('style', 'border-color:green')
    validarEmail = true;
  }

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
          if (`label-${input.id}` === `${label.id}`) {
            if (input.id === "firstName" && input.value.length < 3) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Nome *Insira no mínimo 3 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
            else if (input.id == "firstName" && input.value.length >= 3) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Nome"
              input.setAttribute('style', 'border-color:green')
            }
            else if (input.id == "lastName" && input.value.length < 4) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Sobrenome *Insira no mínimo 4 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
            else if (input.id == "lastName" && input.value.length >= 4) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Sobrenome"
              input.setAttribute('style', 'border-color:green')
            }
            else if (input.id == "username" && input.value.length < 5) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Nome de usuário *Insira no mínimo 5 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
            else if (input.id == "username" && input.value.length >= 5) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Nome de usuário"
              input.setAttribute('style', 'border-color:green')
            }
            else if (input.id == "password" && input.value.length < 6) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              label.innerHTML = "Senha *Insira no mínimo 6 caracteres"
              input.setAttribute('style', 'border-color:red')
            }
            else if (input.id == "password" && input.value.length >= 6) {
              label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              label.innerHTML = "Senha"
              input.setAttribute('style', 'border-color:green')
            }
            if (input.id == "passwordConfirmation" && password.value !== passwordConfirmation.value) {
              confirmLabel.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
              confirmLabel.innerHTML = "Confirme sua senha *As senhas não conferem"
              passwordConfirmation.setAttribute('style', 'border-color:red')
            }
            else if (input.id == "passwordConfirmation" && password.value === passwordConfirmation.value) {
              confirmLabel.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
              confirmLabel.innerHTML = "Confirme sua senha"
              passwordConfirmation.setAttribute('style', 'border-color:green')
            }

          }
        })
      })
    })
  })


  input.addEventListener("focusout", (e) => {
    labels.forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        if ((input.id === "firstName" && input.value.length >= 3) || (input.id === "lastName" && input.value.length >= 4) || (input.id === "username" && input.value.length >= 5) || (input.id === "password" && input.value.length >= 6) || (input.id === "passwordConfirmation" && passwordConfirmation.value === password.value && passwordConfirmation.value.length >= 1 || (input.id === "email" && (validarEmail == true)))) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
          input.setAttribute('style', 'border-color:green')

        }
        else if (((input.id === "firstName" && input.value.length < 3) || (input.id === "lastName" && input.value.length < 4) || (input.id === "username" && input.value.length < 5) || (input.id === "password" && input.value.length < 6) || (input.id === "passwordConfirmation" && passwordConfirmation.value !== password.value && input.value.length > 0) || (input.id === "email" && (validarEmail == false))) && input.value.length > 0) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
          input.setAttribute('style', 'border-color:red')
        }
        else if (input.value.length == 0) {
          label.removeAttribute("style")
          if (input.id == "firstName") {
            red(input, label, "Nome")
          }
          else if (input.id == "lastName") {
            red(input, label, "Sobrenome")
          }
          else if (input.id == "username") {
            red(input, label, "Nome de usuário")
          }
          else if (input.id == "password") {
            red(input, label, "Senha")
          }
          else if (input.id == "passwordConfirmation") {
            red(input, label, "Confirme sua senha")
          }
          else if (input.id == "number") {
            red(input, label, "Celular")
          }
          else if (input.id == "email") {
            red(input, label, "Email")
          }
          else {
            label.removeAttribute('style')
            input.setAttribute('style', 'border-color:#084088')
          }
        }
        else {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: #084088')
          input.setAttribute('style', 'border-color:#084088')
        }
      }
    })
  })
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

});


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

});


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


function red(input, label, nameLabel) {
  label.innerHTML = nameLabel
  label.removeAttribute('style')
  label.setAttribute('style', 'color:red')
  input.setAttribute('style', 'border-color:red')
}