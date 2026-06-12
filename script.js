console.log("Portafolio Premium 🚀");

const textos = [
    "María Fernanda Porres 👋",
    "Desarrolladora Frontend 💻",
    "Estudiante de Desarrollo de Software 🎓",
    "Creando Experiencias Web 🚀"
];

let textoActual = 0;
let letraActual = 0;

const typing =
    document.getElementById("typing-text");

function escribirTexto(){

    if(!typing){
        return;
    }

    if(letraActual < textos[textoActual].length){

        typing.innerHTML +=
            textos[textoActual].charAt(letraActual);

        letraActual++;

        setTimeout(escribirTexto, 80);

    }else{

        setTimeout(borrarTexto, 1500);
    }
}

function borrarTexto(){

    if(letraActual > 0){

        typing.innerHTML =
            textos[textoActual].substring(
                0,
                letraActual - 1
            );

        letraActual--;

        setTimeout(borrarTexto, 40);

    }else{

        textoActual++;

        if(textoActual >= textos.length){
            textoActual = 0;
        }

        setTimeout(escribirTexto, 300);
    }
}

window.onload = () => {

    escribirTexto();
};

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    requestAnimationFrame(() => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
});
/* REVEAL */

const reveals =
    document.querySelectorAll(
        ".card, .sobre-card, .stat"
    );

window.addEventListener("scroll", () => {

    reveals.forEach((elemento) => {

        const top =
            elemento.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if(top < visible){

            elemento.style.opacity = "1";

            elemento.style.transform =
                "translateY(0)";
        }
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});