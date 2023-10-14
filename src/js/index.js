let perroPerdido=[];
class Perro {
  constructor(color, lugar, tamanio, raza) {
    this.color = color;
    this.lugar = lugar;
    this.tamanio = tamanio;
    this.raza = raza;
    this.estado = 'Perdido';
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}
//  crea el contenedor, el span y el tipo de input enviados por parametro
const createInputElement = (name, inputType) => {
  const container = document.createElement('label');
  container.classList.add('container-input');

  const span = document.createElement('span');
  span.innerText = name;

  const input = document.createElement('input');
  input.type = inputType;
  //corrobro que el inputo que vaya a crear sea distinto a foto el cual va llevar otra clase
  if(name !=="Foto"){
    input.className='input';
    input.classList.add(name.toLowerCase());
    input.name=name.toLowerCase();
  }else{
    input.classList.add('input--foto')
    input.name=name.toLowerCase();
  }
  container.append(span,input);
  return container;
};

const button= (clase,value)=>{
  const button= document.createElement('button');
  button.type="submit";
  button.innerText=value;
  button.className=clase;
  return button;
};

//valido los inputos vacios para el reporte de un perro
const validateInput = (raza, color, tamanio, lugar) => {
  if (raza === '' || color === '' || tamanio === '' || lugar === '') {
    alert('No pueden haber valores vacios');
    return undefined;
  } else {
    return new Perro(color.toLowerCase(), lugar.toLowerCase(), tamanio.toLowerCase(), raza.toLowerCase());
  }
};
//valida los inputs de busqueda
const validateInputSearch=((input)=>{
  if (input=="") {
    alert('No puede haber valores vacíos')
  }
});

const showDog=((dog)=>{
  const infoDog=document.createElement('article');
  infoDog.classList='showDog-article'
  infoDog.innerHTML=`
  <h3>${dog.raza}</h3>
  <p>${dog.color}</p>
  <p>${dog.tamanio}</p>
  <p>${dog.lugar}</p>
  <p>${dog.estado}</p>
  `;
  return infoDog;
});

//busqueda
const searchDogButton = document.querySelector('#searchButton');
const searchDogContainer = document.querySelector('.searchDog');
//reporte
const reportDogButton = document.querySelector('#reportButton');
const reportDogContainer = document.querySelector('.reportDog');
//muestra
const showDogButton = document.querySelector('#showButton');
const showDogContainer=document.querySelector('.showDog')
//evento para buscar un perro
searchDogButton.addEventListener('click', () => {
  const inputList=['Raza', 'Color', 'Tamaño', 'Lugar'];
  //esto lo hice para que no me cree más nodos cuando abro o cierro el acordeon, no se si esta bien
  searchDogContainer.innerHTML="";
  const form = document.createElement('form');
  form.classList.add('containerDog');
  const inputs = inputList.map((type) => createInputElement(type, 'text'));
  const submitButton = button('button','Buscar');

  const existingData = localStorage.getItem('perro');
  const lost = existingData ? JSON.parse(existingData) : undefined;
  console.log(perroPerdido);
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const raza= document.querySelector('.containerDog .input.raza').value;
    const color= document.querySelector('.containerDog .input.color').value;
    const tamanio= document.querySelector('.containerDog .input.tamaño').value;
    const lugar= document.querySelector('.containerDog .input.lugar').value;
    let perroEncontrado = lost.find(perro =>
      perro.color === color &&
      perro.raza === raza &&
      perro.lugar === lugar &&
      perro.tamanio===tamanio &&
      perro.estado==='Perdido'
    );
    
    console.log(typeof perroEncontrado);
    raza.value="";
    color.value="";
    tamanio.value="";
    lugar.value="";
  });
  form.append(...inputs, submitButton);
  searchDogContainer.appendChild(form);
});

reportDogButton.addEventListener('click', () => {
  reportDogContainer.innerHTML="";
  const inputList=['Raza', 'Color', 'Tamaño', 'Lugar','Foto'];
  
  const formulario = document.createElement('form');
  formulario.className="containerDog";
  const inputs = inputList.map((type) => {
    if (type === 'Foto') {
      return createInputElement(type,'file');
    }else{
      return createInputElement(type, 'text');
    }
  });
  const submitButton = button('button','Reportar');
  //verifico si hay algo en el local storage porque sino al recargar me sobreecribe.
  const existingData = localStorage.getItem('perro');
  const perroPerdido = existingData ? JSON.parse(existingData) : [];

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();  
      const raza= document.querySelector('.containerDog .input.raza');
      const color= document.querySelector('.containerDog .input.color');
      const tamanio= document.querySelector('.containerDog .input.tamaño');
      const lugar= document.querySelector('.containerDog .input.lugar');
      const razaValue=raza? raza.value : '';
      const colorValue=color? color.value : '';
      const tamanioValue=tamanio? tamanio.value : '';
      const lugarValue=lugar? lugar.value : '';
      const dog = validateInput(razaValue, colorValue, tamanioValue, lugarValue);
      //Valido que sea un objeto y no un undefined
      if (dog) {
        perroPerdido.push(dog);
        alert('Perro reportado con exito');
      }
      const perrosPerdidos=JSON.stringify(perroPerdido);
      localStorage.setItem('perro',perrosPerdidos);
      console.log(perroPerdido);
      raza.value="";
      color.value="";
      tamanio.value="";
      lugar.value="";
  });
  formulario.append(...inputs, submitButton);
  reportDogContainer.appendChild(formulario);
});

showDogButton.addEventListener('click',()=>{
  searchDogContainer.innerHTML = "";
  const existingData = localStorage.getItem('perro');
  const lost = existingData ? JSON.parse(existingData) : [];
  const lostArticles = lost.map(dog => showDog(dog));  
  showDogContainer.append(...lostArticles);
})