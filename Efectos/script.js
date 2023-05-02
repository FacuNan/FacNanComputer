// Selecciona la imagen
const imagen= document.querySelector(".imagen-desvanecimiento");

// Función para actualizar la opacidad de la imagen
function actualizarOpacidad() {
  // Obtiene la posición vertical del usuario en la página
  const posicion = window.scrollY;
  
  // Calcula la opacidad de la imagen en función de la posición del usuario
  const opacidad = 1 - (posicion / imagen.offsetHeight);
  
  // Actualiza la opacidad de la imagen
  imagen.style.opacity = opacidad.toFixed(2);
  
  // Vuelve a llamar a la función en la siguiente animación de fotogramas
  requestAnimationFrame(actualizarOpacidad);
}

// Llama a la función para actualizar la opacidad de la imagen
actualizarOpacidad();
