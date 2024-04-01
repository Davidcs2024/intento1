function cambiarColor() {
    const colores = ['red', 'pink', 'purple', 'yellow'];
    const colorActual = this.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    
    // Evitar repetir el mismo color consecutivamente
    while(nuevoColor === colorActual) {
      nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
  
    this.style.backgroundColor = nuevoColor;
  }
  
  const flor = document.getElementById('flor');
  flor.addEventListener('click', cambiarColor);
  flor.addEventListener('touchstart', cambiarColor);