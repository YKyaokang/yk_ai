/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */

function hongbao(total,num){
    const arr = [];
    let restAmount = total; //剩余金额
    let restNum = num; //剩余人数

    for(let i = 0 ; i < num-1 ; i++)
    {
        // Math
        // 包装类
        let amount = Math.random(restAmount / restNum * 2).toFixed(2);
        arr.push(amount);
        restAmount -= amount;
        restNum --;
    }

    arr.push(restAmount.toFixed(2));
    return arr;
}
console.log(hongbao(100,10));