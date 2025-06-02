/**
 * @func 两数之和
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */

// 函数编写者 
// 函数使用者 
// 健壮性 得到了提升
// typeof 运算符 数据的类型 
// 判断简单数据的类型, 除了null 
// 返回值是类型的字符串

console.log(typeof NaN); //number

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('参数必须是数字');
    }
    return a + b;
}

console.log(add(1, NaN));   