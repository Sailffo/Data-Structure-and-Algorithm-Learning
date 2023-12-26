var rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  const dp = []
  dp[0] = 0
  dp[1] = nums[0]
  for(let i = 2; i < nums.length + 1; i++) {
    dp[i] = Math.max(dp[i-1], nums[i-1] + dp[i-2])
  }
  return dp[dp.length -1]
}

console.log(rob([2,1,1,2]))