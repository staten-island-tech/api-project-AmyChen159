//go get latvian basketball data
//show latvian basketball data 

/* function greet(name){
    const greetPromise = new Promise(function(resolve, reject){
        resolve(`Hello ${name}`);
    });
    return greetPromise;
}

const Aaron = greet("Aaron");
console.log(Aaron); //reciept gotten, now get the food
Aaron.then((result => { //do NOT use .then
    console.log(result);
}));
*/

//REST API 

import '../styles/style.css'

const URL = `https://api.quotable.io/random`; //${pokemon}

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
getData(URL);

// https://github.com/genshindev/api/tree/mistress/assets/data
// https://api.genshin.dev/ 