console.log(typeof NaN); //number
//平方根 NaN
console.log(Math.sqrt(-1));
console.log(NaN + 1)
console.log(0/0);
console.log(parseInt("123"),parseInt("a123"),parseInt("123a"))
console.log(Number(undefined))
console.log(NaN === NaN)  //false Not a Number 的方式有很多种
console.log(typeof NaN)  //true
console.log(isNaN(NaN),isNaN("123"),isNaN(Number("a123"))); //true false true

console.log(Number(true))
console.log(parseInt("1a"))

console.log(Number("123a"))