// let a:any = 1;  // any 任何类型，ts新手，狂用any
// a = "1" // 不能滥用
// function getFirstElement(arr: any[]): any {
//     return arr[0]
// }
// // 复用性， 函数参数 返回值 指定类型
// const numbers = [1,2,3];
// const firstNum = getFirstElement(numbers);

// const strs = ['a','b','c'];
// const firstStr = getFirstElement(strs);

// // 复用这个函数的同时，传入类型参数

// function getFirstElement2<T>(arr: T[]): T|undefined {
//     return arr.length >  0 ? arr[0] : undefined
// }

// const numbers2 = [1,2,3];
// const firstNum2 = getFirstElement2<number>(numbers2);
// firstNum2?.toFixed


function getFirstElement<T>(arr: T[]): T|undefined {
    return arr.length >  0 ? arr[0] : undefined
}

const string = ['hello','world'];

const first = getFirstElement<string>(string);  // ts类型推导

const first2 = getFirstElement<number>([1,2,3]);

const first3 = getFirstElement<string|number>([1,2,3,'hello']);




