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

fn1.__proto__ = ["heheheeheheheheheheheh"];
console.log(fn1.__proto__)