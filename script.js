// verificar idade

function verificarIdade() {
  // Busca o valor que o usuário digitou no campo de idade
  const idadeDigitada = document.getElementById("idade").value;

  if (idadeDigitada === "") {
    alert("Por favor, digite uma idade primeiro.");
  } else if (idadeDigitada >= 18) {
    alert("!Uau, Você é maior de idade.");
  } else {
    alert(
      "Ah... Você é menor de idade! Mas não se preocupe, você ainda poderá responder a este formulário.",
    );
  }
}
function enviarComMensagem(event) {
    // 1. Pega o nome para personalizar o alerta
    const nome = document.getElementById('nome').value;

    // 2. Mostra a sua mensagem personalizada
    alert("Olá " + nome + "! Sua mensagem foi processada e está sendo enviada para o Gabriel via Formspree.");

    // 3. O formulário continuará o envio normalmente após o OK do alerta
    return true; 
}
const meuForm = document.querySelector("form");

meuForm.addEventListener("submit", function (event) {
  // Se você tiver uma validação de idade ou campos vazios:
  const idade = document.getElementById("idade").value;

  if (idade < 0) {
    alert("Idade inválida!");
    event.preventDefault(); // SÓ PARA o envio se houver erro
  }
  // Se não cair no IF, o formulário envia sozinho para o Formspree!
});
// escolher idioma
function escolherIdioma() {
  const seletor = document.getElementById("Idioma");
  const idioma = seletor.value;

  let mensagem = "";

  switch (idioma) {
    case "brasileiro":
      mensagem = "Olá! Bem-vindo.";
      break;

    case "americano":
      mensagem = "Hello! Welcome.";
      break;

    case "espanhol":
      mensagem = "¡Hola! Bienvenido.";
      break;

    case "frances":
      mensagem = "Bonjour! Bienvenue.";
      break;

    default:
      mensagem = "Saudação não encontrada.";
  }
  alert(mensagem);
}
