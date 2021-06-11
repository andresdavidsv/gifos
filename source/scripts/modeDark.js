const BModoNocturno = document.querySelector('#switch')
console.log(BModoNocturno)

BModoNocturno.addEventListener('click',()=>{
    document.body.classList.toggle("modoNocturno");
    if (document.body.classList.contains("modoNocturno") === true) {
        localStorage.setItem("modeDark", "true");
    
        BModoNocturno.textContent = "Modo Diurno";
    
      } else {
        localStorage.setItem("modeDark", "false");
    
        BModoNocturno.textContent = "Modo Nocturno";
    
      }
    });
    
if (localStorage.getItem("modeDark") === "true") {
  document.body.classList.add("modoNocturno");

  BModoNocturno.innerHTML = "Modo Diurno";

} else {
  document.body.classList.remove("modoNocturno");
}
