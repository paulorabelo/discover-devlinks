function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'https://github.com/paulorabelo.png')
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'https://github.com/paulorabelo.png')
  }

}