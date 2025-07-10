const form = document.getElementById("form-contato");
const container = form.parentElement;

const mensagemStatus = document.createElement("p");
mensagemStatus.style.marginTop = "1rem";
mensagemStatus.style.fontWeight = "bold";
container.appendChild(mensagemStatus);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    mensagemStatus.style.color = "red";
    mensagemStatus.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  mensagemStatus.style.color = "green";
  mensagemStatus.textContent =
    "Mensagem enviada com sucesso! Entraremos em contato em breve.";

  form.reset();

  setTimeout(() => {
    mensagemStatus.textContent = "";
  }, 5000);
});
