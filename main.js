const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("rs");

const api_url="https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR";

async function getapi(url) {
    
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}

getapi(api_url);

function show(data) {
    let tab = 
        ` <h1>Anlık Kriptopara Durumu</h1> 
        <br>
         <h1><img src="${data.coins[0].icon}">   ${data.coins[0].name}(${data.coins[0].symbol}) ${data.coins[0].price} </h1>
         <h1><img src="${data.coins[1].icon}">   ${data.coins[1].name}(${data.coins[1].symbol}) ${data.coins[1].price} </h1>
         <h1><img src="${data.coins[2].icon}">   ${data.coins[2].name}(${data.coins[2].symbol}) ${data.coins[2].price} </h1>
         <h1><img src="${data.coins[3].icon}">   ${data.coins[3].name}(${data.coins[3].symbol}) ${data.coins[3].price} </h1>
         <h1><img src="${data.coins[4].icon}">   ${data.coins[4].name}(${data.coins[4].symbol}) ${data.coins[4].price} </h1>
         `;

  
    result.innerHTML = tab;
}


