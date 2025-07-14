var rob = function(nums) {
    const len = nums.length;
    
    //确定dp以及初始化
    const dp = [nums[0],Math.max(nums[0],nums[1])];

    //递推
    for(let i = 2 ; i < len ; i ++)
    {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
    }

    return dp[len-1];

};