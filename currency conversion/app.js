let Base_URL = "https://api.frankfurter.app";

const dropdown = document.querySelectorAll(".dropdown select");
const btn =document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

document.addEventListener("DOMContentLoaded", async () => {
    updateExchangeRate();

});

// for (code in countryList){
//     console.log(code);
// }


 
for (let select of dropdown){
    for(let currcode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currcode;
        newOption.innerText = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        
        }
        else if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
        }
        select.appendChild(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

    const updateFlag = (element) => {
        // console.log(element);
        let currCode = element.value;
        let countryCode = countryList[currCode];
         let newlink =`https://flagsapi.com/${countryCode}/flat/64.png`;
        let imgTag = element.parentElement.querySelector("img");
        imgTag.src = newlink;
    }

    btn.addEventListener("click",(evt) => {
        evt.preventDefault();
        updateExchangeRate();
        });
  
const  updateExchangeRate = async () => {

    let amount = document.querySelector(".amount input");
        let amountval = amount.value;
       //console.log(amount);
       if(amountval === "" || amountval < 1){
             amountval = 1;
             amount.value = "1";

        }

        const URL =`${Base_URL}/latest?amount=${amountval}&from=${fromCurr.value}&to=${toCurr.value}`; 
        // console.log(URL);
        try {
            let response =  await fetch(URL); 
            let data = await response.json();
            //console.log("API Response:", data); // Add this line

        if(data.rates && data.rates[toCurr.value]){
            const rate = data.rates[toCurr.value];
            msg.innerText = `${amountval} ${fromCurr.value} = ${rate} ${toCurr.value}`;
        }else{
            msg.innerText = "conversion Failed .Please try again.";
        }
        // console.log(data);
        }catch(error){
            console.error("Error:",error);
            msg.innerText="Error fetching exchange rate.";
        }
}