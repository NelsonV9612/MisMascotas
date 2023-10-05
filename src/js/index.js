let perroPerdido=[];
class Perro {
    constructor(nombre, aspecto, lugar, tamanio, raza, estado) {
      this.nombre = nombre;
      this.aspecto = aspecto;
      this.lugar = lugar;
      this.tamanio = tamanio;
      this.raza = raza;
      this.estado = estado;
    }

    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  
    statusPerro(perros) {
      for (let i = 0; i < perros.length; i++) {
        const perro = perros[i];
        alert(`
          Nombre: ${perro.nombre}
          Aspecto: ${perro.aspecto}
          Lugar: ${perro.lugar}
          Tamaño: ${perro.tamanio}
          Raza: ${perro.raza}
          Estado: ${perro.estado}
        `);
      }
    }
  }
  
const busquedaPerro=document.querySelector('#searchDog');
console.dir(busquedaPerro);
busquedaPerro.addEventListener('click',() => {
  const nameDog = document.createElement('div');
  
})


