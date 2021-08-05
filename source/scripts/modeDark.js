const BModoNocturno = document.querySelector('#switch')
const logo=document.querySelector('#logoMobile')
const camara=document.querySelector('#camara')
const cinta=document.querySelector('#cinta')
console.log(BModoNocturno)

BModoNocturno.addEventListener('click',()=>{
    document.body.classList.toggle("modoNocturno");
    if (document.body.classList.contains("modoNocturno") === true) {
        localStorage.setItem("modeDark", "true");
    
        BModoNocturno.textContent = "Modo Diurno";
        logo.src="https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/logo-dark-mode.svg";
        camara.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/illustration-camera-dark.svg";
        cinta.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/Illustration-movie-dark.svg";
    
      } else {
        localStorage.setItem("modeDark", "false");
    
        BModoNocturno.textContent = "Modo Nocturno";
        logo.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/logo.svg";
        camara.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/illustration-camera.svg";
        cinta.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/illustration-movie.svg";
    
      }
    });
    
if (localStorage.getItem("modeDark") === "true") {
  document.body.classList.add("modoNocturno");

  BModoNocturno.innerHTML = "Modo Diurno";
  logo.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/logo-dark-mode.svg";
  camara.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/illustration-camera-dark.svg";
  cinta.src = "https://raw.githubusercontent.com/llandkoer/proyectoGifOS/3f5c9538f2f319958c4345a01c7d5ab1ad4638ae/src/assets/Illustration-movie-dark.svg";

} else {
  document.body.classList.remove("modoNocturno");
}
