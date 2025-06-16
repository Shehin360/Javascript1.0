// let promise = new Promise((resolve, reject) => {
//     console.log("Promise started");
//     //resolve("Promise resolved successfully");
//     reject("some error occurred");
// });

function asyncFunc() {
 
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data 1");
            resolve("Success");
            //reject("Error occurred");
        },2000);
    });
}

function asyncFunc2() {
 
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data 2");
            resolve("Success");
            //reject("Error occurred");
        },2000);
    });
}

console.log("Fetching Data 1....");
asyncFunc().then((res) => {
    console.log("Promise resolved with: " + res);
    console.log("Fetching Data 2....");
    asyncFunc2().then((res2) => {});
    // let p2 = new asyncFunc2();
    // p2.then((res) => {
    //     console.log("Promise resolved with: " + res);
    //});
});
// p1.catch((err) => {
//     console.log("Promise rejected with: " + err);

// });


// console.log("Fetching Data 2....");
// let p2 =new asyncFunc2();  

// p2.then((res) => {
//     console.log("Promise resolved with: " + res);
// });
// p2.catch((err) => {
//     console.log("Promise rejected with: " + err);
//  });