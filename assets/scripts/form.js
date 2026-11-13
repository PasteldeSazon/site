// VALIDAÇÃO DE TEXTAREA
const textarea = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const limite = 1500;
const erroText = document.getElementById("erroText");
textarea.maxLength = limite;

function atualizarContador() {
  const quantidade = textarea.value.length;
  const limiteAtingido = quantidade === limite;

  contador.textContent = `${quantidade}/${limite}`;
  erroText.textContent = limiteAtingido
    ? `Você atingiu o limite de ${limite} caracteres.`
    : "";
  erroText.classList.toggle("aviso-limite", limiteAtingido);
  textarea.classList.toggle("limite-atingido", limiteAtingido);
}

textarea.addEventListener("input", atualizarContador);
atualizarContador();

const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroText");

formulario.addEventListener("submit", (evento) => {
  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const mensagemVazia = mensagem.value.trim() === "";

  const nomeInvalido = nomeValor.length < 2;
  const emailInvalido = emailValor === "" || !email.checkValidity();

nome.classList.toggle("campo-invalido", nomeInvalido);
  erroNome.textContent = nomeInvalido
    ? nomeValor === ""
      ? "Informe o nome da empresa."
      : "Informe pelo menos 2 caracteres."
    : "";

email.classList.toggle("campo-invalido", emailInvalido);  erroEmail.textContent = emailInvalido
    ? emailValor === ""
      ? "Informe seu email."
      : "Informe um email válido."
    : "";

  mensagem.classList.toggle("campo-invalido", mensagemVazia);
  erroMensagem.textContent = mensagemVazia
    ? "Escreva uma mensagem."
    : "";

  if (nomeInvalido || emailInvalido || mensagemVazia) {
    evento.preventDefault();
  }
});