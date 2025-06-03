const s1 = Symbol('s1');
const s2 = Symbol('s2');
const s3 = Symbol('s3');
const s4 = Symbol('s4');

const obj = {
    [s1]: 's1',
    [s2]: 's2',
    [s3]: 's3',
    [s4]: 's4',
    age: 18,
    sex: '男'
}

Object.getOwnPropertyNames(obj) // ["age", "sex"]
Object.getOwnPropertySymbols(obj) // [Symbol(ss1), Symbol(ss2), Symbol(ss3), Symbol(ss4)]
for(const e in obj){
    console.log(e) // 只打印了age sex 没有打印出Symbol(ss1) Symbol(ss2) Symbol(ss3) Symbol(ss4)
}
