const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxK90nB_7dXhhbnY01N44RPegYr84xAtQMF6dNzMA7ptRH2IILf1_B0gP2HOVqB8hCETA/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPalpite");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita recarregar a página

    const data = {
      usuario: document.querySelector("#usuario").value,
      jogo: document.querySelector("#jogo").value,
      placarCasa: document.querySelector("#placarCasa").value,
      placarFora: document.querySelector("#placarFora").value
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("✅ Palpite enviado com sucesso!");
        form.reset();
      } else {
        alert("❌ Erro ao enviar o palpite. Verifique o console.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Falha de conexão com o servidor.");
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Troca automática a cada 5 segundos
setInterval(nextSlide, 5000);
