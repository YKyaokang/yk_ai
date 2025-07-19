const arr = [10, 20, 30];
Array.prototype.customProp = '不要遍历我'; // 在原型上添加属性

for (let index in arr) {
    console.log(`索引 ${index} 的值是 ${arr[index]}`);
    // 会输出: 0 10, 1 20, 2 30, 还可能输出 customProp '不要遍历我'
}