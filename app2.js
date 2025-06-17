const URL ="https://catfact.ninja/fact";
const factpara = document.getElementById("fact");
const fetchButton = document.getElementById("btn");

const fetchCatFacts = async () => {
    console.log("Fetching dog facts...");
    let responce = await fetch(URL);
    console.log(responce);
    let data = await responce.json();
    factpara.innerText = data.fact;
}

// function getfact() {
//     fetch(URL).then(response => {
//         return response.json();
// } ).then((data) => {
//         console.log(data);
//         factpara.innerText = data.fact;
//     });

// }
fetchButton.addEventListener("click",fetchCatFacts);