// 动态规划
// [1,1,2,3,5,8]
const waysArray = [1,1]
function climbStairs(n) {
  if (waysArray[n]) {
  } else {
    for (let i = 2; i < n + 1; i++) {
      waysArray[i] = waysArray[i-1] + waysArray[i-2]
    }
  }
  return waysArray[n]
}