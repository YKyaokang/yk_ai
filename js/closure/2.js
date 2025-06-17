// 函数对象
function add(a,b,c){
    // arguments 函数运行时决定，参数总管
    // 下标访问第几个参数 数组
    // 类数组， 有length 属性，For，但是没有太多的方法
    // console.log(a)
    // 如何将类数组转成真正的数组？
    const args = Array.from(arguments); //成为真正的数组
    console.log(Object.prototype.toString.call(args));
    let result = 0;
    // console.log(arguments.map(item => item+1));
    console.log(arguments,'////');
    console.log(Object.prototype.toString.call(arguments))
    console.log(arguments.length);
    for(let i=0;i<arguments.length;i++){ //arguments 类数组对象，不能使用数组方法，但是可以使用for循环
        console.log(arguments[i]);
    }
    return a+b+c;
}
console.log(add.length); //函数的参数的长度
console.log(add(1,2,3))
