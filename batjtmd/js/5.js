function fn(){
    let a = 2;
    if(true){
        var b = 3;
    }
    console.log(b); 
}

fn();

if (false)
{
    //块级作用域
    let value = 1;
}

console.log(value);