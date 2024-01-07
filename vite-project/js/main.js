import '../styles/style.css';
import {DOMselectors} from './dom'

/* const URL = `https://api.genshin.dev/artifacts`; 

 async function getData(URL){
    try {
        const response = await fetch(URL); 
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data); //[#]
        for(let i = 0; i < data.length; i++){
          console.log(data[i]);
      }
        document.querySelector('#container').insertAdjacentHTML(
          `beforeend`,
          `<h2>${data}</h2>`
        ) 
    } catch (error) {
        console.log(error)
    }
}
getData(URL);


//sample?

const URL = `https://api.genshin.dev/artifacts/adventurer`; 

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    document
      .querySelector("#container")
      .insertAdjacentHTML(`beforeend`,
      `<div class="gallery">
      <h2>${data.name}</h2>
      <h3>Max Rarity: ${data.max_rarity} Star</h3>
      <h3>2-Piece Set: ${data['2-piece_bonus']}</h3>
      <h3>4-Piece Set: ${data['4-piece_bonus']}</h3>
      <img id="icon" src="https://api.genshin.dev/artifacts/adventurer/flower-of-life"/>
      <img src="https://api.genshin.dev/artifacts/adventurer/plume-of-death"/>
      <img src="https://api.genshin.dev/artifacts/adventurer/sands-of-eon"/>
      <img src="https://api.genshin.dev/artifacts/adventurer/goblet-of-eonothem"/>
      <img src="https://api.genshin.dev/artifacts/adventurer/circlet-of-logos"/>
      </div>`);
  } catch (error) {
    console.log(error);
  }
}
getData(URL); */

const URLs = [
  'https://api.genshin.dev/artifacts/adventurer',
];

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    document
      .querySelector("#container")
      .insertAdjacentHTML('beforeend', `
        <div class="gallery">
          <h2>${data.name}</h2>
          <h3>Max Rarity: ${data.max_rarity} Star</h3>
          <h3>2-Piece Set: ${data['2-piece_bonus']}</h3>
          <h3>4-Piece Set: ${data['4-piece_bonus']}</h3>
          <img id="icon" src="${url}/flower-of-life"/>
          <img src="${url}/plume-of-death"/>
          <img src="${url}/sands-of-eon"/>
          <img src="${url}/goblet-of-eonothem"/>
          <img src="${url}/circlet-of-logos"/>
        </div>`
      );
  } catch (error) {
    console.log(error);
  }
}

// Loop through each URL in the array
for (const url of URLs) {
  getData(url);
}


/* :(
function clear(){
  document.querySelectorAll('.gallery').forEach((el) => el.remove())
}

DOMselectors.img.addEventListener("click", function(){
  clear()
}) */

//https://api.genshin.dev/artifacts --> get a list of artifact names 
//run a foreach(?) for each artifact name into https://api.genshin.dev/artifacts/${artifactname}
//do that for images and pretty the card
//add search function 

/* const URL = `https://api.genshin.dev/artifacts`; 

 async function getData(){
    try {
        const response = await fetch(URL); 
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.log(error)
    }
}
getData(URL); 

function newURL(URL, artifactName){
  const seperator = URL.endsWith('/') ? '' : '/';
} */

/* function newLink(){
  data.forEach(name => {`https://api.genshin.dev/artifacts/${name.data}`})
}

newLink(data); */


