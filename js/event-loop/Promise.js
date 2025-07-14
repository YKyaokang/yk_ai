const { resolve } = require("path");

    console.log("1")

    let myPromise = new Promise((resolve)=>{
        console.log("3");
        resolve("4");
    })

    Promise.resolve(console.log("2")).then(console.log("3"))

    myPromise.then(i => {
        console.log(i);
    })




    console.log("5")

    
    Promise.resolve(console.log("2")).then(()=>{console.log("3")})

    new Promise((resolve)=>{
        console.log("2")
        resolve();
    }).then(()=>{console.log("3")})
    