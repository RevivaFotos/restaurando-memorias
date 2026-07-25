/*=========================================
REVIVA FOTOS
JavaScript
=========================================*/


/*==============================
HEADER
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("ativo");

    } else {

        header.classList.remove("ativo");

    }

});


/*==============================
SCROLL SUAVE
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
CONTADORES
==============================*/

const numeros = document.querySelectorAll("[data-numero]");

const iniciarContadores = () => {

    numeros.forEach(numero => {

        const alvo = Number(numero.dataset.numero);

        let atual = 0;

        const incremento = alvo / 120;

        const timer = setInterval(() => {

            atual += incremento;

            if (atual >= alvo) {

                numero.innerText = alvo;

                clearInterval(timer);

            } else {

                numero.innerText = Math.floor(atual);

            }

        }, 15);

    });

};

let contadorExecutado = false;

window.addEventListener("scroll", () => {

    const secao = document.querySelector(".numeros");

    if (!secao) return;

    const topo = secao.getBoundingClientRect().top;

    if (topo < window.innerHeight - 150 && !contadorExecutado) {

        iniciarContadores();

        contadorExecutado = true;

    }

});


/*==============================
ANIMAÇÃO FADE
==============================*/

const elementos = document.querySelectorAll(

".card,.process-card,.depoimento,.numero,.titulo,.hero-text,.hero-image"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

elementos.forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});
/*=========================================
SLIDER ANTES / DEPOIS
=========================================*/

const slider = document.querySelector(".slider");
const overlay = document.querySelector(".img-overlay");

if (slider && overlay) {

    slider.addEventListener("input", function () {

        overlay.style.width = this.value + "%";

    });

}


/*=========================================
LIGHTBOX DA GALERIA
=========================================*/

const imagens = document.querySelectorAll(".galeria-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="fechar">&times;</span>
    <img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");

const fechar = document.getElementById("fechar");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

fechar.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

const topo = document.createElement("div");

topo.id = "topo";

topo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topo.classList.add("mostrar");

    } else {

        topo.classList.remove("mostrar");

    }

});

topo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
EFEITO HOVER DOS BOTÕES
=========================================*/

const botoes = document.querySelectorAll(".btn-primary,.btn-secondary");

botoes.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});


/*=========================================
ANO AUTOMÁTICO NO RODAPÉ
=========================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Reviva Fotos. Todos os direitos reservados.`;

}


/*=========================================
PRELOAD
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================
FIM
=========================================*/