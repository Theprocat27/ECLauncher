document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const version = document.getElementById("version").value;

    if (!username || !version) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // 🔗 Modifique aqui as URLs das versões:
    const urls = {
      "1.12.2": "https://theprocat27.github.io/Eaglercraft_1.12.2/",
      "1.8.8": "https://theprocat27.github.io/Eaglercraft_1.8.8/",
      "1.5.2": "https://theprocat27.github.io/Eaglercraft_1.5.2/",
      "1.3": "https://theprocat27.github.io/Eaglercraft_1.3/",
    };

    const jogoURL = urls[version];
    const destino = `${jogoURL}?username=${encodeURIComponent(username)}`;

    // Tela de carregamento simples
    document.body.innerHTML = `
      <div style="text-align:center; color:white; font-family:sans-serif; margin-top:20%;">
        <h2>Carregando Eaglercraft ${version}...</h2>
        <p>Bem-vindo, ${username}!</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = destino;
    }, 1500);
  });
});
