var fn1 = function()
{
    console.log("Im a function")
}

function fn2(name)
{
    this.name=name
}

console.log(fn1.__proto__)  //[Function (anonymous)] Object
console.log(fn2.__proto__)  //[Function (anonymous)] Object


console.log(fn1.__proto__.__proto__ === [Object: null prototype] ) //Object Object