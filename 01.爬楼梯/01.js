// 递归算法，爬n级楼梯的所有可能性即爬n-1级楼梯与n-2级楼梯的可能性之和
// 因此有 climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
// 加上记忆化递归即有此算法
const caches = [1,1]
function climbStairs (n) {
  if (n === 1) {
    return 1
  }
  if (n === 0) {
    return 1
  }
  if (!caches[n]) {
    caches[n] = climbStairs(n-1) + climbStairs(n-2)
  }
  return caches[n]
}
console.log(climbStairs(45))