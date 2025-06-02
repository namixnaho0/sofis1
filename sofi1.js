document.addEventListener("DOMContentLoaded", function () {
  const plataforma = document.getElementById("plat");
  const correo = document.getElementById("correo");
  const contra = document.getElementById("pass");
  const perfil = document.getElementById("perfil");
  const labelPerfil = document.getElementById("labelPerfil");
  const salida = document.getElementById("salida");
  const botonGenerar = document.getElementById("btn");
  const botonBorrar = document.getElementById("btnb");
  const btnCompleta = document.getElementById("btnc");
  const btnPerfil = document.getElementById("btnp");
  let modo = "completa"; // por defecto

  btnCompleta.addEventListener("click", function () {
    modo = "completa";
    perfil.style.display = "none";
    labelPerfil.style.display = "none";
  });

  btnPerfil.addEventListener("click", function () {
    modo = "perfil";
    perfil.style.display = "block";
    labelPerfil.style.display = "block";
  });

  function limpiarSalida() {
    salida.innerHTML = "";
    salida.classList.remove("mostrar");
  }

  function generarContenido() {
    const gp = plataforma.value;
    const gc = correo.value.trim();
    const gpass = contra.value.trim();
    const gperf = perfil.value;
    const lineaPerfil = modo === "completa" ? "🌟 Cuenta completa" : `👤 ${gperf}`;
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, "0");
    const mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
    const anio = hoy.getFullYear();
    const fecha = `${dia}/${mes}/${anio}`;

    const lineas = [
      "❀ 𝒮𝑜𝒻𝒾𝒶 𝑀𝑜𝓇𝑒𝓃𝑜 / 𝑅𝑒𝓋 ❀",
      "↬ " + gp,
      "↬ 𝗙𝗲𝗰𝗵𝗮: " + fecha,
      "↬ 𝗚𝗮𝗿𝗮𝗻𝘁í𝗮: 25 𝗱í𝗮𝘀",
      "๛ 💌 " + gc,
      "๛ 🗝️ " + gpass,
      "๛ " + lineaPerfil,
      "- Un solo dispositivo por perfil",
      "- No cambiar datos",
      "- La cuenta está verificada, no está bloqueada. Si la bloquean, pierde garantía automáticamente.",
      "- Las cuentas son monitoreadas diariamente. Por cada dispositivo extra, se quitan 2 días de garantía.",
      "- Se requiere foto del inicio de sesión para validar la garantía.",
      "๛ ¡Gracias por tu compra! ☁️🩷",
    ];

    salida.innerHTML = ""; // Limpia antes de mostrar
    lineas.forEach((linea) => {
      const p = document.createElement("p");
      p.textContent = linea;
      salida.appendChild(p);
    });

    salida.classList.add("mostrar");
  }

  botonGenerar.addEventListener("click", generarContenido);
  botonBorrar.addEventListener("click", limpiarSalida);
});
