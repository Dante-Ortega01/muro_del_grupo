// let boton = document.querySelector("button");

// boton.addEventListener("click", () => {
//     let texto = prompt("Escribe tu recado");

//     lista.innerHTML += 
// })

// publicarRecado = () => {
//     let nombre = prompt("Escribe tu nombre");
//     let texto = prompt("Escribe tu recado");
//     let recado = document.createElement("div");
//     recado.textContent = texto;
//     document.getElementById("lista").append(recado);
// }

const publicarRecado = () => {
  let nombre = prompt("Escribe tu nombre");
  let texto = prompt("Escribe tu recado");


  let tarjeta = document.createElement("div");
//   tarjeta.className = "card tarjeta-nota bg-primary-subtle border-0 border-top border-primary border-4 rounded-4 shadow p-3";

  tarjeta.innerHTML = `
    <div class="card-body card tarjeta-nota bg-primary-subtle border-0 border-top border-primary border-4 rounded-4 shadow p-3" style=" transform: rotate(2deg);>
      <b class="d-block text-uppercase text-info-emphasis small mb-2">${nombre}:</b>
      <span class="texto-recado fs-5 text-dark">${texto}</span>
    </div>
  `;

  document.getElementById("lista").append(tarjeta);
  
};