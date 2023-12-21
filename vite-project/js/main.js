import '../styles/style.css'

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

const artifact = `https://api.genshin.dev/artifacts${artifactName}`
const artifactName = data[i]

async function getArtifact(artifact){
  try {
    const response = await fetch(artifact); 
    if(response.status !=200){
        throw new Error(response.statusText);
    }
    console.log(response);
    const artifactInfo = await response.json();
    console.log(artifactInfo); 
} catch (error) {
    console.log(error)
}
  data.forEach(card => {
    `beforeend`,
      `<div class="gallery">
        <h2 id="">${card.name}</h2> 
      </div>`
  })
} 

getArtifact(artifact) */

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
      `<h2>${data.name}</h2>
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
getData(URL);

function clear(){
  document.querySelectorAll('.gallery').forEach((el) => el.remove())
}

DOMselectors.img.addEventListener("click", function(){
  clear()
})
