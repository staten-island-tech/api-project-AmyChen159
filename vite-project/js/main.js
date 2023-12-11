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
        console.log(data);
        //document.querySelector("h1").textContent = data.content; //shift alt down to copy 
        //document.querySelector("h2").textContent = data.author;
        /* document.querySelector('#container').insertAdjacentHTML(
          `beforeend`,
          `<h2>${data.artifacts}</h2>`
        ) */
        document.querySelector("h2").innerText = data;
    } catch (error) {
        document.querySelector("h1").textContent = error;
    }
}
getData(URL);





