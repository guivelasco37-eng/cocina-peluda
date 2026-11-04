/* =====================================================================
   MI PERRO, MI RAZA · APP
   ---------------------------------------------------------------------
   CÓDIGO DE ACCESO: cámbialo aquí. Es el código que envías al cliente
   (por ejemplo, en el correo de entrega de Hotmart). No distingue
   mayúsculas de minúsculas.
   ===================================================================== */
const CODIGO_ACCESO = "MIRAZA2026";

/* Clave donde se guarda el acceso en el celular. Si cambias el código y
   quieres que todos lo vuelvan a escribir, cambia también esta clave. */
const CLAVE_ACCESO = "mpmr_acceso_v1";

/* --------------------------------------------------------------------- */
const $app = document.getElementById("app");
const GRUPOS = { pequena: "Pequeña", mediana: "Mediana", grande: "Grande", mestizo: "Mestizo" };
const FILTROS = [["todas", "Todas"], ["pequena", "Pequeñas"], ["mediana", "Medianas"], ["grande", "Grandes"], ["mestizo", "Mestizos"]];
let filtro = "todas";
let busqueda = "";

const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function guardado(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function guardar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

function tieneAcceso() { return guardado(CLAVE_ACCESO) === "ok"; }

/* Foto con respaldo: si img/<id>.jpg no existe, círculo naranja con 🐶 y la inicial */
function sinFoto(r) {
  const ini = (r.nombre || "?").trim().charAt(0).toUpperCase();
  return `<div class="sin-foto"><span class="e">🐶</span><span class="l">${esc(ini)}</span></div>`;
}
function foto(r) {
  return `<img src="img/${esc(r.id)}.jpg" alt="${esc(r.nombre)}" loading="lazy" onerror="this.outerHTML=this.parentNode.dataset.fallback">`;
}
function contFoto(cls, r) {
  return `<div class="${cls}" data-fallback="${esc(sinFoto(r))}">${foto(r)}</div>`;
}

function cabecera(sub) {
  return `<header class="top">
    <span class="logo"><i>🐾</i>Cocina <b>Peluda</b></span>
    <h1>Mi Perro, <span>Mi Raza</span></h1>
    ${sub ? `<p>${sub}</p>` : ""}
  </header>`;
}
function barraVolver(destino) {
  return `<div class="volver"><button type="button" data-ir="${destino || "#/"}">← Volver</button></div>`;
}

/* ---------------- PANTALLA: ACCESO ---------------- */
function pantallaAcceso() {
  $app.innerHTML = cabecera("La guía completa de tu perro") + `
  <main class="acceso">
    <form class="card" id="f-acceso" autocomplete="off">
      <h2>🔑 Escribe tu código de acceso</h2>
      <p>Lo encuentras en el correo de tu compra.</p>
      <input class="campo" id="codigo" type="text" inputmode="text" autocapitalize="characters" spellcheck="false" placeholder="TU CÓDIGO" aria-label="Código de acceso">
      <button class="btn" type="submit">ENTRAR</button>
      <p class="error" id="err" hidden>Ese código no es correcto. Revisa el correo de tu compra e inténtalo de nuevo.</p>
    </form>
  </main>`;
  document.getElementById("f-acceso").addEventListener("submit", e => {
    e.preventDefault();
    const v = document.getElementById("codigo").value.trim().toUpperCase();
    if (v && v === CODIGO_ACCESO.trim().toUpperCase()) {
      guardar(CLAVE_ACCESO, "ok");
      router();
    } else {
      document.getElementById("err").hidden = false;
    }
  });
}

/* ---------------- PANTALLA: INICIO ---------------- */
function pantallaInicio() {
  $app.innerHTML = cabecera("Elige la raza de tu perro y descubre todo sobre él.") + `
  <main class="zona">
    <a class="banner" href="#/guardar">📲 <span>Guarda esta app en tu celular</span><span class="ir">›</span></a>
    <label class="buscar"><input id="q" type="search" placeholder="Busca la raza de tu perro…" value="${esc(busqueda)}" aria-label="Buscar raza"></label>
    <div class="chips" role="tablist">
      ${FILTROS.map(([k, t]) => `<button type="button" class="chip${filtro === k ? " on" : ""}" data-filtro="${k}">${t}</button>`).join("")}
    </div>
    <div id="lista"></div>
    <a class="mest-cta" href="#/mestizos">🐾 <span>¿Tu perro es mestizo? Encuentra su ficha según su tamaño y su energía</span><span class="ir">›</span></a>
  </main>`;
  pintarLista();
  const q = document.getElementById("q");
  q.addEventListener("input", () => { busqueda = q.value; pintarLista(); });
  $app.querySelectorAll("[data-filtro]").forEach(b => b.addEventListener("click", () => {
    filtro = b.dataset.filtro;
    $app.querySelectorAll("[data-filtro]").forEach(x => x.classList.toggle("on", x === b));
    pintarLista();
  }));
}
function pintarLista() {
  const q = norm(busqueda.trim());
  const lista = RAZAS.filter(r => (filtro === "todas" || r.grupo === filtro) && (!q || norm(r.nombre).includes(q)));
  const el = document.getElementById("lista");
  if (!lista.length) {
    el.innerHTML = `<p class="vacio">No encontramos esa raza todavía. 🐶<br>Prueba con otro nombre o mira las fichas de mestizos.</p>`;
    return;
  }
  el.innerHTML = `<div class="grid">${lista.map(r => `
    <button type="button" class="raza" data-ir="#/raza/${esc(r.id)}">
      ${contFoto("foto", r)}
      <div class="nom">${esc(r.nombre)}</div>
      <div class="tag">${esc(GRUPOS[r.grupo] || "")}</div>
    </button>`).join("")}</div>`;
}

/* ---------------- PANTALLA: FICHA ---------------- */
function patitas(n) {
  n = Math.max(1, Math.min(5, Number(n) || 0));
  let s = "";
  for (let i = 1; i <= 5; i++) s += `<span class="${i <= n ? "" : "off"}">🐾</span>`;
  return `<span class="patitas" aria-label="Energía ${n} de 5">${s}</span>`;
}
function seccion(titulo, html, abierta) {
  return `<details class="sec"${abierta ? " open" : ""}><summary>${titulo}</summary><div class="cuerpo">${html}</div></details>`;
}
function lista(arr, tag) {
  tag = tag || "ul";
  return `<${tag}>${(arr || []).map(x => `<li>${esc(x)}</li>`).join("")}</${tag}>`;
}
function pantallaFicha(id) {
  const r = RAZAS.find(x => x.id === id);
  if (!r) { location.hash = "#/"; return; }
  const corto = r.nombre.replace(/\s*\(.*\)\s*/, "");
  const a = r.alimentacion || {}, ej = r.ejercicio || {}, pe = r.pelo || {}, et = r.etapas || {};
  const volverA = r.grupo === "mestizo" ? "#/mestizos" : "#/";

  const s = [];
  s.push(seccion(`🐶 Así es tu ${esc(corto)}`, `<p>${esc(r.asi_es)}</p>`, true));
  s.push(seccion("🍲 Cómo alimentarlo", `
    <h4>Lo que necesita</h4><p>${esc(a.necesidades)}</p>
    <h4>Cuánto y cuántas veces</h4><p>${esc(a.porcion)}</p>
    <h4>Recetas de Cocina Peluda que mejor le van</h4>${lista(a.recetas_recomendadas)}`));
  s.push(seccion("🩺 Su salud: qué vigilar", (r.salud || []).map(x => `
    <div class="item"><h5>${esc(x.problema)}</h5>
      <p>${esc(x.que_es)}</p>
      <p><b>Señales:</b> ${esc(x.senales)}</p>
      <p class="vet">📞 <b>Llévalo al veterinario si…</b> ${esc(x.ir_al_veterinario_si)}</p>
    </div>`).join("")));
  s.push(seccion("🎓 Cómo educarlo", (r.educacion || []).map(x => `
    <div class="item"><h5>${esc(x.problema)}</h5>
      <p><b>Por qué pasa:</b> ${esc(x.por_que)}</p>
      ${lista(x.pasos, "ol")}
    </div>`).join("") + `<p style="margin-top:12px;font-size:15px;color:var(--gris)">Siempre con premios, paciencia y cariño. Nunca con gritos ni castigos.</p>`));
  s.push(seccion("🏃 Ejercicio y juego", `
    <h4>Cuánto ejercicio</h4><p>${esc(ej.minutos)}</p>
    <h4>Paseos</h4><p>${esc(ej.paseo)}</p>
    <h4>Juegos que le encantan</h4>${lista(ej.juegos)}
    <h4>Ten en cuenta</h4><p>${esc(ej.cuidado)}</p>`));
  s.push(seccion("✂️ Pelo, baño y uñas", `
    <h4>Cepillado</h4><p>${esc(pe.cepillado)}</p>
    <h4>Baño</h4><p>${esc(pe.bano)}</p>
    <h4>Uñas</h4><p>${esc(pe.unas)}</p>
    <h4>Orejas, ojos y dientes</h4><p>${esc(pe.orejas_ojos)}</p>`));
  s.push(seccion("📅 Etapa por etapa", `
    <h4>🐣 Cachorro</h4><p>${esc(et.cachorro)}</p>
    <h4>🐕 Adulto</h4><p>${esc(et.adulto)}</p>
    <h4>🧓 Senior</h4><p>${esc(et.senior)}</p>`));
  s.push(seccion("⭐ Datos curiosos", lista(r.curiosos)));

  $app.innerHTML = barraVolver(volverA) + `
  <section class="ficha-top">
    ${contFoto("ficha-foto", r)}
    <h2>${esc(r.nombre)}</h2>
    <div class="rapida">
      <div class="dato"><small>📏 Tamaño</small><b>${esc(r.tamano)}</b></div>
      <div class="dato"><small>⚖️ Peso adulto</small><b>${esc(r.peso)}</b></div>
      <div class="dato"><small>❤️ Esperanza de vida</small><b>${esc(r.vida)}</b></div>
      <div class="dato"><small>⚡ Energía</small><b>${patitas(r.energia)}</b></div>
    </div>
  </section>
  <main class="secciones">${s.join("")}</main>
  <p class="aviso">Este contenido es educativo y no reemplaza la consulta con un médico veterinario.</p>`;
  window.scrollTo(0, 0);
}

/* ---------------- PANTALLA: MESTIZOS ---------------- */
let mTam = "", mEne = "";
function pantallaMestizos() {
  const tams = [["pequeno", "Pequeño", "🐕", "hasta 10 kg"], ["mediano", "Mediano", "🐕", "10 a 25 kg"], ["grande", "Grande", "🐕", "más de 25 kg"]];
  const enes = [["tranquilo", "Tranquilo", "😌"], ["activo", "Activo", "⚡"]];
  $app.innerHTML = barraVolver("#/") + cabecera("Fichas para mestizos") + `
  <main class="zona">
    <div class="card">
      <p style="font-size:16.5px">Cada mestizo es único. Elige el tamaño y la energía que más se parecen a tu perro y te mostramos su ficha.</p>
      <div class="paso"><h3>1. ¿De qué tamaño es?</h3>
        <div class="opciones">${tams.map(([k, t, e, d]) => `<button type="button" class="op${mTam === k ? " on" : ""}" data-tam="${k}"><span class="e" style="font-size:${k === "pequeno" ? 20 : k === "mediano" ? 26 : 32}px">${e}</span>${t}<small style="font-weight:700;color:var(--gris);font-size:12px">${d}</small></button>`).join("")}</div>
      </div>
      <div class="paso"><h3>2. ¿Cómo es su energía?</h3>
        <div class="opciones dos">${enes.map(([k, t, e]) => `<button type="button" class="op${mEne === k ? " on" : ""}" data-ene="${k}"><span class="e">${e}</span>${t}</button>`).join("")}</div>
      </div>
      <button class="btn" type="button" id="ver">VER SU FICHA</button>
      <p class="error" id="merr" hidden></p>
      <p class="nota">Si no sabes su peso, piensa en el tamaño que tendrá de adulto.</p>
    </div>
  </main>`;
  $app.querySelectorAll("[data-tam]").forEach(b => b.addEventListener("click", () => { mTam = b.dataset.tam; pantallaMestizos(); }));
  $app.querySelectorAll("[data-ene]").forEach(b => b.addEventListener("click", () => { mEne = b.dataset.ene; pantallaMestizos(); }));
  document.getElementById("ver").addEventListener("click", () => {
    const err = document.getElementById("merr");
    if (!mTam || !mEne) { err.textContent = "Elige el tamaño y la energía de tu perro."; err.hidden = false; return; }
    const id = `mestizo-${mTam}-${mEne}`;
    if (RAZAS.some(r => r.id === id)) location.hash = `#/raza/${id}`;
    else { err.textContent = "Esta ficha llega muy pronto. 🐾"; err.hidden = false; }
  });
}

/* ---------------- PANTALLA: CÓMO GUARDAR LA APP ---------------- */
let tabSO = /iphone|ipad|ipod/i.test(navigator.userAgent) ? "ios" : "android";
function pantallaGuardar() {
  const android = [
    "Abre esta página en <b>Chrome</b>.",
    "Toca el menú <b>⋮</b> (los tres puntitos de arriba a la derecha).",
    "Toca <b>\"Agregar a pantalla principal\"</b> (o \"Instalar app\").",
    "Confirma con <b>\"Agregar\"</b>. ¡Listo! Ya tienes el ícono en tu celular."
  ];
  const ios = [
    "Abre esta página en <b>Safari</b>.",
    "Toca el botón <b>Compartir</b> (el cuadrito con una flecha hacia arriba).",
    "Desliza y toca <b>\"Agregar a inicio\"</b>.",
    "Toca <b>\"Agregar\"</b>. ¡Listo! Ya tienes el ícono en tu celular."
  ];
  $app.innerHTML = barraVolver("#/") + cabecera("Cómo guardar la app") + `
  <main class="zona">
    <div class="tabs">
      <button type="button" class="tab${tabSO === "android" ? " on" : ""}" data-so="android">🤖 Android</button>
      <button type="button" class="tab${tabSO === "ios" ? " on" : ""}" data-so="ios">🍎 iPhone</button>
    </div>
    <ol class="pasos">${(tabSO === "ios" ? ios : android).map(x => `<li><span>${x}</span></li>`).join("")}</ol>
    <p class="nota">Después ábrela desde el ícono, como cualquier app. Tu código queda guardado y no te lo vuelve a pedir.</p>
  </main>`;
  $app.querySelectorAll("[data-so]").forEach(b => b.addEventListener("click", () => { tabSO = b.dataset.so; pantallaGuardar(); }));
}

/* ---------------- RUTAS ---------------- */
function router() {
  if (!tieneAcceso()) { pantallaAcceso(); return; }
  const h = location.hash || "#/";
  const m = h.match(/^#\/raza\/(.+)$/);
  if (m) pantallaFicha(decodeURIComponent(m[1]));
  else if (h === "#/mestizos") pantallaMestizos();
  else if (h === "#/guardar") pantallaGuardar();
  else pantallaInicio();
  if (!m) window.scrollTo(0, 0);
}
$app.addEventListener("click", e => {
  const b = e.target.closest("[data-ir]");
  if (b) { e.preventDefault(); location.hash = b.dataset.ir; }
});
window.addEventListener("hashchange", router);
router();

/* PWA: funciona sin internet después de la primera visita */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
