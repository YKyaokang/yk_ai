// 递归
// 相似的问题
// 自顶向下的思考 问题的终点
// 退出条件 
// 重复计算
// 树状结构


    const dfs = function(n){
        if(n===1)
        return 1;
        if(n===0)
        return 0;
        return dfs(n-1)+dfs(n-2);
    }
// 记忆

console.log(dfs(10));