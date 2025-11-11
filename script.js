const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxhT3JEYpbAS9pBo9qnT14hrzRbHSC-cS7ptgO333sOvZGDlpS1bvWxzdXodPTihA3Zw/exec";

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
