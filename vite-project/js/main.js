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
        //document.querySelector("h1").textContent = data.content; //shift alt down to copy 
        //document.querySelector("h2").textContent = data.author;
        document.querySelector('#container').insertAdjacentHTML(
          `beforeend`,
          `<h2>${data}</h2>`
        ) 
    } catch (error) {
        console.log(error)
        //document.querySelector("h1").textContent = error;
    }
}
getData(URL);





