import '../styles/style.css'

const URL = `https://api.genshin.dev/artifacts`; 

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

getArtifact(artifact)
