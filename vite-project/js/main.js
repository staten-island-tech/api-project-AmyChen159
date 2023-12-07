import '../styles/style.css'

const URL = `https://api.genshin.dev/`; 

async function getData(URL){
    try {
        const response = await fetch(URL); 
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        //document.querySelector("h1").textContent = data.content; //shift alt down to copy 
        //document.querySelector("h2").textContent = data.author;
        /* document.querySelector('#container').insertAdjacentHTML(
          `beforeend`,
          `<h2>${data.artifacts.name}</h2>`
        ) */
    } catch (error) {
        document.querySelector("h1").textContent = error;
    }
}
getData(URL);

function createCard(cards) {
  cards.forEach(card => {
    document.querySelector('#container').insertAdjacentHTML(
      `beforeend`,
      `<div class="gallery">
        <h2 id="charactername">${card.name}</h2> 
        <img id="imageicon" src="${card.icon}"/>
        <h3 class="bottomtext">${card.element} | ${card.weapon}</h3>
        <h3 class="bottomtext">${card.region}</h3>
        <h3 class="bottomtext">${card.rarity}</h3>
      </div>`) 
  })
}

createCard(cards)



