var bag = function(weight,value,bagweight){
    //解决01背包问题
    let length = weight.length;
    //确定dp数组的意义：i表示从0-i的物品中任选，放在容量为j的背包上，此时背包内的最大价值
    const dp = new Array(length+1).fill().map(item => new Array(bagweight+1).fill(0));

    //确定递推公式: 每个物品的状态分为选与不选，选与不选分别对应着此时的两种价值，在两者之间可以抉择最大价值 并更新
    dp[i][j] = Math.max(dp[i-1][j] , dp[i-1][j - weight[i]] + value[i]);
    
    //确定初始值：时刻记住dp的意义
    for(let i = 0 ; i <= length; i++)
    {
        dp[i][0] = 0; //在背包容量为0的情况下，不论怎么选物品，价值都为0
    }
    for(let j = weight[0] ; j <= bagweight ; j ++)
    {
        dp[0][j] = value[0];  //只选物品1的情况：当背包容量大于物品1的重量时：价值为物品1的价值
    }

    //递推：确定递推顺序：由于拿到每个最大值 需要参照左上角，所以先遍历背包和先遍历物品 都可以

    for(let i = 1; i <= length;i++)
    {
        for(let j = 1 ; j <= bagweight;j++)
        {
            //在背包容量为j的情况下，考虑取或不取物品i
            if(weight[i] > j) dp[i][j] = dp[i-1][j];
            dp[i][j] = Math.max(dp[i-1][j]  ,  value[i]+dp[i-1][j-weight[i]])
        }
    }
    
    return dp[length][bagweight]



}