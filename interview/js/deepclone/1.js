// 有两个容器，盒子A 放有钥匙，钱包
// 盒子B 放有 手机，充电宝

const target = {a:1};
const source = {b:2};
const source2 = {c:3};
const result = Object.assign(target,source)
console.log(result,target);
result.a = 11;
console.log(result,target);