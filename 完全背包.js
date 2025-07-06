function completeKnapsackOptimized(weights, values, capacity) {
    //1.确定dp数组的含义:
    //从0-i个物品中选，每个物品可以选无限次，放在容量为j的背包中，dp[j]为最大价值
    
    //2.确定递推公式：选与不选（注意，当前物品可以选无限次）
    // dp[j] = max(dp[j],dp[j-weights[i]])
    
    // //初始化 当背包j的重量大于物品0的重量 则使用递推公式
    // dp[0] = 0 dp[j] = dp[j-weights[0]] + values[j];

    //遍历顺序 一定要从前往后：因为我们在递推公式时需要拿到计算过的数据
    
    const n = weights.length;
    const dp = new Array(capacity + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        // 完全背包需要正序遍历
        for (let j = weights[i]; j <= capacity; j++) {
            dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
        }
    }
    
    return dp[capacity];
}

// 示例使用
console.log(completeKnapsackOptimized(weights, values, capacity)); // 输出: 10











