// Número de WhatsApp do corretor (formato internacional, sem espaços/símbolos)
// TROQUE pelo número real da Danielle antes de publicar
const NUMERO_WHATSAPP = "5521999999999";

// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("aberto");
    });
  }

  // Formulário de cotação
  const form = document.getElementById("form-cotacao");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const idade = document.getElementById("idade").value.trim();
      const plano = document.getElementById("tipo-plano").value;
      const observacao = document.getElementById("observacao").value.trim();

      if (!nome || !telefone) {
        alert("Por favor, preencha ao menos nome e telefone.");
        return;
      }

      let mensagem = `Olá! Gostaria de uma cotação de plano de saúde.%0A%0A`;
      mensagem += `*Nome:* ${nome}%0A`;
      mensagem += `*Telefone:* ${telefone}%0A`;
      if (idade) mensagem += `*Idade:* ${idade}%0A`;
      if (plano) mensagem += `*Tipo de plano:* ${plano}%0A`;
      if (observacao) mensagem += `*Observação:* ${observacao}%0A`;

      const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;
      window.open(url, "_blank");
    });
  }
});
