function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather API");
            resolve(200);
        }, 2000);
    });
}



async function getWeather(){
    await api();
    await api();
    await api();
    await api();
    await api();
    await api();
    console.log("Async function completed");



}

(
    async function getWeather(){
    await api();
    await api();
    await api();
    await api();
    await api();
    await api();
        console.log("IIFE completed");


})();

// async function hello(){
//     console.log("Hello");
// }

// hello();