function configurarFormulario(ids) {
  const formulario = document.getElementById(ids.form);
  const nome = document.getElementById(ids.nome);
  const email = document.getElementById(ids.email);
  const mensagem = document.getElementById(ids.mensagem);
  const contador = document.getElementById(ids.contador);
  const erroNome = document.getElementById(ids.erroNome);
  const erroEmail = document.getElementById(ids.erroEmail);
  const erroMensagem = document.getElementById(ids.erroMensagem);
  const limite = 1500;

  mensagem.maxLength = limite;

  function atualizarContador() {
    const quantidade = mensagem.value.length;
    const limiteAtingido = quantidade === limite;

    contador.textContent = `${quantidade}/${limite}`;
    erroMensagem.textContent = limiteAtingido
      ? `Você atingiu o limite de ${limite} caracteres.`
      : "";
    erroMensagem.classList.toggle("aviso-limite", limiteAtingido);
    mensagem.classList.toggle("limite-atingido", limiteAtingido);
  }

  mensagem.addEventListener("input", atualizarContador);
  atualizarContador();

  formulario.addEventListener("submit", (evento) => {
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemVazia = mensagem.value.trim() === "";

    const nomeInvalido = nomeValor.length < 2;

    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailValor);

    const emailInvalido =
      emailValor === "" || !email.checkValidity() || !formatoEmailValido;

    nome.classList.toggle("campo-invalido", nomeInvalido);
    erroNome.textContent = nomeInvalido
      ? nomeValor === ""
        ? "Informe o nome da empresa."
        : "Informe pelo menos 2 caracteres."
      : "";

    email.classList.toggle("campo-invalido", emailInvalido);
    erroEmail.textContent = emailInvalido
      ? emailValor === ""
        ? "Informe seu email."
        : "Informe um email válido."
      : "";

    mensagem.classList.toggle("campo-invalido", mensagemVazia);
    erroMensagem.textContent = mensagemVazia ? "Escreva uma mensagem." : "";

    if (nomeInvalido || emailInvalido || mensagemVazia) {
      evento.preventDefault();
    }
  });
}

configurarFormulario({
  form: "formSidebar",
  nome: "nomeSidebar",
  email: "emailSidebar",
  mensagem: "mensagemSidebar",
  contador: "contadorSidebar",
  erroNome: "erroNomeSidebar",
  erroEmail: "erroEmailSidebar",
  erroMensagem: "erroTextSidebar",
});

configurarFormulario({
  form: "form",
  nome: "nome",
  email: "email",
  mensagem: "mensagem",
  contador: "contador",
  erroNome: "erroNome",
  erroEmail: "erroEmail",
  erroMensagem: "erroText",
});
