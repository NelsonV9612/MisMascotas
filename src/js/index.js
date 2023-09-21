class Perro {
    constructor(nombre, aspecto, lugar, tamanio, raza, estado) {
      this.nombre = nombre;
      this.aspecto = aspecto;
      this.lugar = lugar;
      this.tamanio = tamanio;
      this.raza = raza;
      this.estado = estado;
    }
  
    // Retorna una instancia de un perro
    static createPerro(nombre, aspecto, lugar, tamanio, raza, estado) {
      return new Perro(nombre, aspecto, lugar, tamanio, raza, estado);
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  
    static statusPerro(perros) {
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
  
  alert("Bienvenido a MiMascota");
  const nombrePersona = prompt("¿Cómo es tu nombre?");
  let perroPerdido = [];
  const busquedaPerro = () => {
    let seleccion = false;
    let raza, aspecto, nombrePerro, lugar, tamanio;
  
    do {
      while (true) {
        opcion = parseInt(prompt(`${nombrePersona.charAt(0).toUpperCase() + nombrePersona.slice(1)} desea:
              1. Buscar un perro perdido. 
              2. Reportar un perro perdido.
              3. Mostrar perros perdidos.
              4. Salir`));
  
        if (isNaN(opcion) || opcion < 1 || opcion > 4) {
          alert("Ingresó una opción incorrecta. Por favor, ingrese un número válido.");
        } else {
          break;
        }
      }
  
      switch (opcion) {
        case 1:
          raza = prompt("Ingresar la raza del perro.");
          aspecto = prompt("Ingresar el aspecto del perro.");
          lugar = prompt("Ingresar el lugar donde se vio por última vez el perro.");
          nombrePerro = prompt("Ingresar el nombre del perro");
          tamanio= prompt("Ingresar el tamaño del perro");
          let perroEncontrado = perroPerdido.find(perro =>
            perro.raza === raza &&
            perro.aspecto === aspecto &&
            perro.lugar === lugar &&
            perro.nombre === nombrePerro &&
            perro.tamanio===tamanio
          );
          console.log(perroEncontrado);
          if (perroEncontrado) {
            perroEncontrado.cambiarEstado("encontrado");
            alert(`Su perro fue encontrado en: ${perroEncontrado.lugar}`);
          } else {
            alert("Lo siento, su perro no se encuentra en nuestros registros.");
          }
          break;
        case 2:
          lugar = prompt("Ingrese donde encontró el perro");
          aspecto = prompt("Ingrese el aspecto del perro encontrado");
          raza = prompt("Ingresar la raza del perro.");
          tamanio = prompt("Ingresar el tamaño del perro");
          nombrePerro = prompt("Ingresar el nombre del perro si lo posee.");
          agregarPerro(nombrePerro, aspecto, lugar, tamanio, raza);
          alert("Gracias por reportar un perro");
          break;
  
        case 3:
          Perro.statusPerro(perroPerdido);
          break;
  
        case 4:
          seleccion = true;
          break;
      }
      
    } while (!seleccion);
  };
  
  const agregarPerro = (nombre, aspectoEncontrado, lugarEncontrado, tamanio, raza) => {
    perroPerdido.push(Perro.createPerro(nombre, aspectoEncontrado, lugarEncontrado, tamanio, raza, "perdido"));
  };
  
  busquedaPerro();
