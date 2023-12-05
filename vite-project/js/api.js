/* const URL = `https://api.quotable.io/random`; //${pokemon}

async function getData(URL){
    try {
        const response = await fetch(URL); //await gets promise (?)
        if(response.status !=200){ //>299
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content; //shift alt down to copy 
        document.querySelector("h2").textContent = data.author;
    } catch (error) {
        document.querySelector("h1").textContent = error;
    }
}
getData(URL); */

