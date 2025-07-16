const maxProfit = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);  //持有（包含两种状态）or不持有 （包含三种状态）
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i-1][0],-prices[i]),
            Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
        ]
    }
    return dp[len - 1][1];
};

const maxProfit1 = prices => {
    const len = prices.length;
    
    const dp = new Array(len);
    
    dp[0][0] = -prices[i];
    dp[0][1] = 0;

    for(let i = 1 ; i < len ;i ++)
    {
        dp[i] = [
            Math.max(dp[i-1][0], -prices[i]),
            Math.max(dp[i-1][1], dp[i-1][0] + prices[i])
        ]
    }
    return dp[len-1][1];
};

const maxProfit2 = prices => {
    const len = prices.length;
    
    const dp = new Array(len);
    
    dp[0][0] = -prices[i];
    dp[0][1] = 0;

    for(let i = 1 ; i < len ;i ++)
    {
        dp[i] = [
            Math.max(dp[i-1][0], dp[i-1][1]-prices[i]),
            Math.max(dp[i-1][1], dp[i-1][0] + prices[i])
        ]
    }
    return dp[len-1][1];
};