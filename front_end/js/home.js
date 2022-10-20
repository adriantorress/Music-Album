//---Variáveis e Constantes---

//Os 4 blocos principais: home, logar, cadastrar e o header de logar e cadastrar
const home = document.querySelector(".home");
const header = document.getElementById("header");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");

//Os botões de navegação
const btnHome = document.getElementById("home");
const btnCadastreSe = document.getElementById("cadastre-se");
const btnEntrar = document.getElementById("entrar");

//Todos os inputs e labels de logar e cadastrar (estão na mesma página, aparecendo conforme a navegação)
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

//Botão para visualizar a senha
const btnEye = document.querySelectorAll(".fa-solid");
const inputBtn = [inputs[1], inputs[7], inputs[8]] //inputs que possuem o botão

//Botões para cadastrar e logar
const cadastrar = document.getElementById("send");
const logar = document.getElementById("enviar");

//URLs para acesso da api via front-end 
const urlCadastro = "http://localhost:3000/sign-up";
const urlLogin = "http://localhost:3000/sign-in";

//Constantes para checar valor nos seus respectivos eventos
var genderSelected;
const gender = document.querySelectorAll("input[name='gender']");
const labelGender = document.getElementById("genero");

const password = document.getElementById("password");
const labelPassword = document.getElementById("label-password");

const passwordConfirmation = document.getElementById("passwordConfirmation");
const labelPasswordConfirmation = document.getElementById("label-passwordConfirmation");

//Variáveis de validação do campo de cadastro
var validarNome;
var validarSobrenome;
var validarUsuario;
var validarEmail;
var validarSenha;
var validarConfirmarSenha;
var validarCelular;
var validarGenero = false;
let menorPos = []
const cellRegex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
const emailRegex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$")


//---Listeners---

//Escutando o evento CHANGE nos radio-buttons de gênero 
gender.forEach((e) => {
  e.addEventListener("change", () => {
    genderSelected = document.querySelector("input[name='gender']:checked").value;
    if (genderSelected) {
      validarGenero = true
      labelGender.setAttribute('style', 'color:green')
    }
  })
})


//Chama as funções que escuta os eventos de FOCUSIN, KEYUP E FOCUSOUT do input passado
inputs.forEach((input) => {
  if (input.id !== "none" || input.id !== "others" || input.id !== "female" || input.id !== "male" || input.id !== "enviar" || input.id !== "send") {
    onFocusIn(input);
    onKeyUp(input);
    onFocusOut(input);
  }
});


//Escutando o evento CLICK nos buttons de visualização de senha
btnEye.forEach((btn) => {
  btn.addEventListener("click", (e) => {
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


//Escutando o evento CLICK nos botão de cadastrar
cadastrar?.addEventListener("click", e => {
  e.preventDefault();
  if (validarNome && validarSobrenome && validarUsuario && validarGenero && validarEmail && validarCelular && validarSenha && validarConfirmarSenha) {
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
        resetDecorations();
      })
      .catch(error => {
        let errorData = error.response.data;
        console.log(errorData);
        estilizarValidacaoResponse(5, errorData, "Nome de usuário indisponível!")
        estilizarValidacaoResponse(6, errorData, "Email indisponível!")
        estilizarValidacaoResponse(9, errorData, "Celular indisponível!")
      });
  }
  estilizarValidacao(validarNome, 3);
  estilizarValidacao(validarSobrenome, 4);
  estilizarValidacao(validarUsuario, 5);
  estilizarValidacao(validarEmail, 6);
  estilizarValidacao(validarSenha, 7);
  estilizarValidacao(validarConfirmarSenha, 8);
  estilizarValidacao(validarCelular, 9);
  estilizarValidacao(validarGenero, null);
});


//Escutando o evento CLICK nos botão de login
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
    .catch(error => {
      console.log(error.response.data)
    });
});



//Funções

//Estilizar validação
function estilizarValidacao(validar, pos) {
  if (!pos && !validar) {
    labelGender.removeAttribute('style')
    labelGender.setAttribute('style', 'color:red')
  }
  else if (!validar) {
    onFocusIn(inputs[`${pos}`], 'red')
    menorPos.push(pos)
    inputs[pos].focus();
  }
  else {
    menorPos = []
  }
  console.log(Math.min(...menorPos))
  console.log(menorPos)
  inputs[(Math.min(...menorPos))]?.focus();
}


//Estilizar validação
function estilizarValidacaoResponse(pos, errorData, inner) {
  if (errorData["error"] == inner) {
    onFocusIn(inputs[pos], 'red');
    labels[pos - 1].innerHTML = inner
    inputs[pos].focus();
  }
}

//Escuta o evento de FOCUSIN do input passado
function onFocusIn(input, color = '#4086e0') {
  input.addEventListener("focusin", (e) => {
    labels.forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        label.setAttribute('style', `font-size:13px; margin-top:0; color: ${color}`)
        input.setAttribute('style', `border-color:${color}`)
      }
    })
  });
}


//Escuta o evento de KEYUP do input passado
function onKeyUp(input) {
  input.addEventListener("keyup", (e) => {
    labels.forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        if (input.id === "firstName" && input.value.length < 3) {
          keyUpDecorations(label, input, "red", "Nome", validarNome, "3")
        }
        else if (input.id == "firstName" && input.value.length >= 3) {
          keyUpDecorations(label, input, "green", "Nome", validarNome)
        }
        else if (input.id == "lastName" && input.value.length < 4) {
          keyUpDecorations(label, input, "red", "Sobrenome", validarSobrenome, "4")
        }
        else if (input.id == "lastName" && input.value.length >= 4) {
          keyUpDecorations(label, input, "green", "Sobrenome", validarSobrenome)
        }
        else if (input.id == "username" && input.value.length < 5) {
          keyUpDecorations(label, input, "red", "Usuário", validarUsuario, "5")
        }
        else if (input.id == "username" && input.value.length >= 5) {
          keyUpDecorations(label, input, "green", "Usuário", validarUsuario)
        }
        else if (input.id == "password" && input.value.length < 6) {
          keyUpDecorations(label, input, "red", "Senha", validarSenha, "6")
          if (input.value === passwordConfirmation.value && passwordConfirmation.value.length > 0) {
            keyUpDecorations(labelPasswordConfirmation, passwordConfirmation, "red", "Confirme sua senha *Insira no mínimo 6 caracteres", validarConfirmarSenha)
          }
          else if (passwordConfirmation.value.length > 0) {
            keyUpDecorations(labelPasswordConfirmation, passwordConfirmation, "red", "Confirme sua senha *As senhas não conferem", validarConfirmarSenha)
          }
        }
        else if (input.id == "password" && input.value.length >= 6) {
          keyUpDecorations(label, input, "green", "Senha", validarSenha)
          if (input.value === passwordConfirmation.value) {
            keyUpDecorations(labelPasswordConfirmation, passwordConfirmation, "green", "Confirme sua senha", validarConfirmarSenha)
          }
          else if (passwordConfirmation.value.length > 0) {
            keyUpDecorations(labelPasswordConfirmation, passwordConfirmation, "red", "Confirme sua senha *As senhas não conferem", validarConfirmarSenha)
          }
        }
        else if (input.id == "passwordConfirmation" && input.value !== password.value) {
          keyUpDecorations(label, input, "red", "Confirme sua senha *As senhas não conferem", validarConfirmarSenha)
        }
        else if (input.id == "passwordConfirmation" && input.value === password.value) {
          if (input.value.length > 0 && input.value.length < 6) {
            keyUpDecorations(label, input, "red", "Confirme sua senha *Insira no mínimo 6 caracteres", validarConfirmarSenha)
          }
          else {
            keyUpDecorations(label, input, "green", "Confirme sua senha", validarConfirmarSenha)
          }
        }
        else if (input.id == "number") {
          validarCelular = cellRegex.test(input.value);
          if (!validarCelular) {
            keyUpDecorations(label, input, "red", "Celular *Formato inválido", validarCelular)
          }
          else {
            keyUpDecorations(label, input, "green", "Celular", validarCelular)
          }
        }
        else if (input.id == "email") {
          validarEmail = emailRegex.test(input.value);
          if (!validarEmail) {
            keyUpDecorations(label, input, "red", "Email *Incorreto", validarEmail)

          }
          else {
            label.removeAttribute('style');
            keyUpDecorations(label, input, "green", "Email", validarEmail)
          }
        }
      }
    })
  })
}


//Escuta o evento de FOCUSOUT do input passado
function onFocusOut(input) {
  input.addEventListener("focusout", (e) => {
    labels.forEach((label) => {
      if (`label-${input.id}` === `${label.id}`) {
        if ((input.id === "firstName" && input.value.length >= 3) || (input.id === "lastName" && input.value.length >= 4) || (input.id === "username" && input.value.length >= 5) || (input.id === "password" && input.value.length >= 6) || (input.id === "passwordConfirmation" && passwordConfirmation.value === password.value && passwordConfirmation.value.length >= 6 || (input.id === "email" && (validarEmail === true)) || (input.id === "number" && (validarCelular === true)))) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
          input.setAttribute('style', 'border-color:green')
          if (input.id === "firstName") { validarNome = true; }
          else if (input.id === "lastName") { validarSobrenome = true; }
          else if (input.id === "username") { validarUsuario = true; }
          else if (input.id === "password") { validarSenha = true; }
          else if (input.id === "passwordConfirmation") { validarConfirmarSenha = true; }
        }

        else if (((input.id === "firstName" && input.value.length < 3) || (input.id === "lastName" && input.value.length < 4) || (input.id === "username" && input.value.length < 5) || (input.id === "password" && input.value.length < 6) || (input.id === "passwordConfirmation" && passwordConfirmation.value !== password.value && input.value.length > 0) || (input.id === "email" && (validarEmail == false)) || (input.id === "number" && (validarCelular === false)) || (input.id === "passwordConfirmation" && passwordConfirmation.value === password.value && passwordConfirmation.value.length >= 1)) && input.value.length > 0) {
          label.setAttribute('style', 'font-size:13px; margin-top:0; color: red')
          input.setAttribute('style', 'border-color:red')
          if (input.id === "firstName") { validarNome = false; }
          else if (input.id === "lastName") { validarSobrenome = false; }
          else if (input.id === "username") { validarUsuario = false; }
          else if (input.id === "password") { validarSenha = false; }
          else if (input.id === "passwordConfirmation") { validarConfirmarSenha = false; }
        }
        else if (input.value.length === 0) {
          label.removeAttribute("style")
          if (input.id == "firstName") {
            focusOutDecorations(input, label, "Nome")
            validarNome = false;
          }
          else if (input.id == "lastName") {
            focusOutDecorations(input, label, "Sobrenome")
            validarSobrenome = false;
          }
          else if (input.id == "username") {
            focusOutDecorations(input, label, "Usuário")
            validarUsuario = false;
          }
          else if (input.id == "password") {
            focusOutDecorations(input, label, "Senha")
            validarSenha = false;
          }
          else if (input.id == "passwordConfirmation") {
            focusOutDecorations(input, label, "Confirme sua senha")
            validarConfirmarSenha = false;
          }
          else if (input.id == "number") {
            focusOutDecorations(input, label, "Celular")
            validarCelular = false;
          }
          else if (input.id == "email") {
            focusOutDecorations(input, label, "Email")
            validarEmail = false;
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
}


//Verifica os valores dos parâmetros passados para estilizar o input, que está sendo escutado o evento de FOCUSOUT no momento, e a sua respectiva label
function focusOutDecorations(input, label, nameLabel) {
  label.innerHTML = nameLabel
  label.removeAttribute('style')
  label.setAttribute('style', 'color:red')
  input.setAttribute('style', 'border-color:red')
}


//Reseta 'todas' as estilizações dos inputs e suas respectivas labels
function resetDecorations() {
  labelGender.removeAttribute('style');
  gender.forEach((g) => {
    if (g.checked === true) { g.checked = false };
  });
  inputs.forEach(input => {
    if (input.id != "send" && input.id != "enviar" && (input.id != "male" && input.id != "female" && input.id != "none" && input.id != "others")) {
      input.value = ""
    }
    input.removeAttribute("style")
    labels.forEach(label => {
      label.removeAttribute("style")
      if (`label-${input.id}` === `${label.id}`) {
        resetLabelInner(input, label, "firstName", "Nome")
        resetLabelInner(input, label, "lastName", "Sobrenome")
        resetLabelInner(input, label, "userName", "Usuário")
        resetLabelInner(input, label, "password", "Senha")
        resetLabelInner(input, label, "passwordConfirmation", "Confirme sua senha")
        resetLabelInner(input, label, "number", "Celular")
        resetLabelInner(input, label, "email", "Email")
      }
    })
  })

}


function resetLabelInner(input, label, idd, inner) {
  if (input.id === idd) {
    label.innerHTML = inner;
  }
}


//Verifica os valores dos parâmetros passados para estilizar o input, que está sendo escutado o evento de KEYUP no momento, e a sua respectiva label
function keyUpDecorations(label, input, cor, inner, validar, minCaracter = null) {
  if (cor == "red") {
    label.setAttribute('style', 'font-size:13px; margin-top:0; color: red');
    if (input.id == "passwordConfirmation" || input.id == "number" || input.id == "email") {
      label.innerHTML = `${inner}`;
    }
    else {
      label.innerHTML = `${inner} *Insira no mínimo ${minCaracter} caracteres`;
    }
    input.setAttribute('style', 'border-color:red');
    validar = false;
  }
  else if (cor == "green") {
    label.setAttribute('style', 'font-size:13px; margin-top:0; color: green')
    label.innerHTML = `${inner}`
    input.setAttribute('style', 'border-color:green')
    validar = true;
  }
}


//Função navegar verifica o caminho de qual o usuário ta vindo e muda a configuração das divs da página
function navegar(comeFrom = "home") {

  //Caso ele venha da div de cadastro ou login ele verifica e muda o valor contido nas classes das divs, tanto de cadastro quanto de login
  if (comeFrom == "cadastro" || comeFrom == "login") {
    signIn.classList.toggle("off");
    signIn.classList.toggle("container");
    signUp.classList.toggle("off");
    signUp.classList.toggle("container");
  }

  //Caso ele venha da div home (que é o valor padrão, pois o programa vai sair da tela inicial em um timeOut, caso não seja apertado o botão da tela inicial), ele seta home como off e torna a div header e login com suas respectivas classes "normais" e foca o primeiro input de login -> Usuário 
  else if (comeFrom == "home" && home.classList.contains("home")) {
    home.classList.remove("home")
    home.classList.add("off")
    header.classList.remove("off");
    header.classList.add("header");
    signIn.classList.remove("off");
    signIn.classList.add("container")
    inputs[0].focus();
  }
}


//Função navegação vai ficar escutando os eventos de click nos botões de navegação e chamar a função navegar para ir para a div que o usuário determinou, caso esteja na tela home, ele vai para a próxima tela mesmo que não haja um evento de clique
function navegacao() {
  //Home dura 3s e vai para login
  setTimeout(navegar, 3000)

  //Escuta o evento click do botão de navegação da home para ir para tela de login (caso não seja clicado, ele vai pelos 3s definidos)
  btnHome.addEventListener("click", event => {
    navegar();
  });

  //Escuta o evento click do botão de navegação cadastre-se para ir para tela de cadastro
  btnCadastreSe.addEventListener("click", event => {
    navegar("cadastro");
    //limpa todas as configurações da tela de login e foca o primeiro input de cadastro -> Nome
    resetDecorations();
    inputs[3].focus();
  });

  //Escuta o evento click do botão de navegação entrar para ir para tela de cadastro
  btnEntrar.addEventListener("click", event => {
    navegar("login");
    //limpa todas as configurações da tela de cadastro e foca o primeiro input de login -> Usuário
    resetDecorations();
    inputs[0].focus();
  })
}


navegacao()