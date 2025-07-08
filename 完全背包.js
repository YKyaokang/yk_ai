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





// 完全背包应用题：

// 1.求方法数（组合）
const change = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for(let i =0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }

    return dp[amount];
}
// 核心公式：dp[j] += dp[j-coins[i]] 
// 注意遍历的顺序：先遍历物品，再遍历背包容量
// 物品从0开始到length 背包从coins[i]开始到amaount


//2.求方法数（排列）
const combinationSum4 = (nums, target) => {

    let dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for(let j = 0; j <= target; j++) {
        for(let i = 0; i < nums.length; i++) {
            if (j >= nums[i]) {
                dp[j] += dp[j - nums[i]];
            }
        }
    }
    return dp[target];
};
//核心公式不变：dp[j] += dp[j - nums[i]];
// 注意遍历的顺序：先遍历背包容量，再遍历物品
// 背包容量从0开始到amaount 物品从0到length


// 3.求装满背包时，物品的最小数量
// 遍历物品
const coinChange = (coins, amount) => {
    if(!amount) {
        return 0;
    }

    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}
//核心公式：dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
//初始化！！！ 一定要将dp[0]初始化为0，其他初始化为Infinity
// 遍历顺序：无所谓







