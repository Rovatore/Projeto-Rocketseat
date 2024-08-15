function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag imagem 
  const img = document.querySelector("#profile img")
  // subistituir a imagem (if e else)
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/imgs/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito usando óculos escuros uma jaqueta cinza e uma camisa preta por baixo, sem barba")
  }
  else {
    img.setAttribute("src","./assets/imgs/avatar.png")
    img.setAttribute(
      "alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
 )
  }
  
}
