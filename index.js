//alteraçao de cor
const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
})
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/close_white_36dp.svg";
  }
}
//Escrever na apresentação
const tituloOla = document.querySelector(".titulo-ola")
const tituloEmp = document.querySelector(".titulo-emp")

function Escreve(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra
    }, 150 * i)
  })
}
Escreve(tituloOla)


//entrada lateral
const myObsever = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObsever.observe(element))

//mover card com o vanila
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1
});

//parte ver mais
var verMaisbtn = document.querySelector("#show-hide")
var contEsc = document.querySelector(".projetos-escondidos")
verMaisbtn.addEventListener("click", function () {
  if (contEsc.style.display === "block") {
    contEsc.style.display = "none";
    this.textContent = 'Ver Mais';
  } else {
    contEsc.style.display = "block";
    this.textContent = 'Ver Menos';
  }
})