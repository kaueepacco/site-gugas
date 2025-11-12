//SCRIPT BOLAO

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
        alert("✅ Palpite enviado com sucesso!");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert("❌ Falha de conexão com o servidor.");
    }
  });
});

//SCRIPT SLIDER

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  const total = slides.length;
  const intervalTime = 5000; // 5 segundos
  let slideInterval;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide(index);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();
});

//SCRIPT MENU

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

      // Fecha o menu ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});

//SCRIPT GALERIA

const itens = document.querySelectorAll(".item");
    const modal = document.getElementById("modal");
    const conteudoModal = document.getElementById("conteudoModal");
    const fechar = document.getElementById("fechar");

    itens.forEach(item => {
      item.addEventListener("click", () => {
        const tipo = item.getAttribute("data-type");
        const src = item.getAttribute("data-src");

        modal.style.display = "flex";
        conteudoModal.innerHTML = ""; // limpa o modal

        if (tipo === "image") {
          const img = document.createElement("img");
          img.src = src;
          conteudoModal.appendChild(img);
        } else if (tipo === "video") {
          const video = document.createElement("video");
          video.src = src;
          video.controls = true;
          video.autoplay = true;
          conteudoModal.appendChild(video);
        } else if (tipo === "youtube") {
          const iframe = document.createElement("iframe");
          iframe.src = src + "?autoplay=1";
          iframe.frameBorder = "0";
          iframe.allow = "autoplay; fullscreen";
          conteudoModal.appendChild(iframe);
        }
      });
    });

    fechar.addEventListener("click", () => {
      modal.style.display = "none";
      conteudoModal.innerHTML = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        conteudoModal.innerHTML = "";
      }
    });