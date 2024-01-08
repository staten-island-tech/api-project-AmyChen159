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
*/

const URLs = [
  'https://api.genshin.dev/artifacts/adventurer',
  'https://api.genshin.dev/artifacts/archaic-petra',
  'https://api.genshin.dev/artifacts/berserker',
  'https://api.genshin.dev/artifacts/blizzard-strayer',
  'https://api.genshin.dev/artifacts/bloodstained-chivalry',
  'https://api.genshin.dev/artifacts/brave-heart',
  'https://api.genshin.dev/artifacts/crimson-witch-of-flames',
  'https://api.genshin.dev/artifacts/deepwood-memories',
  'https://api.genshin.dev/artifacts/defender-s-will',
  'https://api.genshin.dev/artifacts/desert-pavilion-chronicle',
  'https://api.genshin.dev/artifacts/echoes-of-an-offering',
  'https://api.genshin.dev/artifacts/emblem-of-severed-fate',
  'https://api.genshin.dev/artifacts/flower-of-paradise-lost',
  'https://api.genshin.dev/artifacts/gambler',
  'https://api.genshin.dev/artifacts/gilded-dreams',
  'https://api.genshin.dev/artifacts/gladiator-s-finale',
  'https://api.genshin.dev/artifacts/heart-of-depth',
  'https://api.genshin.dev/artifacts/husk-of-opulent-dreams',
  'https://api.genshin.dev/artifacts/instructor',
  'https://api.genshin.dev/artifacts/lavawalker',
  'https://api.genshin.dev/artifacts/lucky-dog',
  'https://api.genshin.dev/artifacts/maiden-beloved',
  'https://api.genshin.dev/artifacts/martial-artist',
  'https://api.genshin.dev/artifacts/noblesse-oblige',
  'https://api.genshin.dev/artifacts/nymph-s-dream',
  'https://api.genshin.dev/artifacts/ocean-hued-clam',
  'https://api.genshin.dev/artifacts/pale-flame',
  'https://api.genshin.dev/artifacts/resolution-of-sojourner',
  'https://api.genshin.dev/artifacts/retracing-bolide',
  'https://api.genshin.dev/artifacts/scholar',
  'https://api.genshin.dev/artifacts/shimenawa-s-reminiscence',
  'https://api.genshin.dev/artifacts/tenacity-of-the-millelith',
  'https://api.genshin.dev/artifacts/the-exile',
  'https://api.genshin.dev/artifacts/thundering-fury',
  'https://api.genshin.dev/artifacts/thundersoother',
  'https://api.genshin.dev/artifacts/tiny-miracle',
  'https://api.genshin.dev/artifacts/traveling-doctor',
  'https://api.genshin.dev/artifacts/vermillion-hereafter',
  'https://api.genshin.dev/artifacts/viridescent-venerer',
  'https://api.genshin.dev/artifacts/viurukasha-s-glow',
  'https://api.genshin.dev/artifacts/wanderer-s-troupe',
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
          <h2 id="artifactName">${data.name}</h2>
          <img id="icon" src="${url}/flower-of-life"/>
        </div>`
      );
  } catch (error) {
    console.log(error);
  }
}

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

//shittery
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


