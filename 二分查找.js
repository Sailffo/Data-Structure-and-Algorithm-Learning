// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 输入: nums = [-1,0,3,5,9,12], target = 9     
// 输出: 4       
// 解释: 9 出现在 nums 中并且下标为 4     
function binarySearch(nums, target) {
  if (target > nums[nums.length - 1] || target < nums[0]) {
    return - 1
  }
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2 )
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([-1,0,3,5,9,12], 2))
