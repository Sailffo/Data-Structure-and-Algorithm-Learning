// 超时递归版

function getOtherArray(idx, arr) {
  return arr.filter((item, index) => {
    return ![idx-1, idx, idx+1].includes(index)
  })
}

var rob = function(nums) {
  if (nums.length < 2) {
    return nums[0]
  }
  const result = []
  const forTimes = nums.length % 2 === 1 ? (nums.length+ 1) / 2 : nums.length / 2
  for (let i = 0; i <= forTimes; i++) {
    const otherArray = getOtherArray(i, nums)
    let otherArraySum = 0
    if (otherArray.length>1) {
      otherArraySum = rob(otherArray)
    } else if (otherArray.length === 1) {
      otherArraySum = otherArray[0]
    }
    const sum = nums[i] + otherArraySum
    result.push(sum)
  }
  return Math.max.apply(null, result)
};

console.log(rob([183,219,57,193,94,233,202,154,65,240]))