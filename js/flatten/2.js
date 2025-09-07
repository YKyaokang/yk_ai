// reduce [] => 1项 
// 多维数组 => 1项一维数组 

function flatten(arr) {
    // stack,递归 LIFO 
    const stack = [...arr];
    const res = [];
    while(stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            res.push(item);
        }
    }
    return res.reverse(); 
}