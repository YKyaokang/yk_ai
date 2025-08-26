function createCounter() {
    let count = 0;
    return {
        inc: () => ++count,
        get: () => count
    }
}

const counter = createCounter();
counter.inc();
counter.inc();
console.log(counter.count); // undefined
console.log(counter.get());



for(var i = 0 ; i < 3 ; i++){
    setTimeout(() => {
        console.log(i)
    },100)
}