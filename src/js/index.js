alert("Bienvenido a MiMascota");
let nombre=prompt("¿Como es tu nombre?");
let opcion;
let perroPerdido=[];
let perroEncontrado=[];
const busquedaPerro=()=>{
    let seleccion=true;
    do {
        while (true) {
            opcion=parseInt(prompt(`${nombre.charAt(0).toUpperCase()+nombre.slice(1)} desea:
            1.Buscar un perro perdido. 
            2.Reportar un perro perdido.
            3.Salir`));
            if (opcion<1 || opcion>3){
                alert("Ingresó una opción incorrecta");
            }else{
                break;
            }
        }
        switch (opcion) {
            case 1:
                const raza=prompt("Ingresar la raza del perro.");
                const aspecto=prompt("Ingresar la aspecto del perro."); 
                const lugar=prompt("Ingresar la lugar donde se vió por ultima vez el perro.");
                const nombrePerro=prompt("Ingresar la nombre del perro");
                alert("Buscaremos a su perro");
                perroPerdido.push({raza,aspecto,lugar,nombrePerro});
                break;
            case 2:
                const lugarEncontrado=prompt("Ingrese donde encontró el perro");
                const aspectoEncontrado=prompt("Ingrese el aspecto del perro encontrado");
                perroEncontrado.push({lugarEncontrado,aspectoEncontrado});
                alert("Gracias por reportar un perro");
                break;
            case 3:
                seleccion=false;
        }
    } while (seleccion);
    
};
busquedaPerro();


