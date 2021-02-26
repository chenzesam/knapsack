/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const partition = (start, end, nums) => {
    const pivot = nums[end];
    let big = start;
    for (let i = start; i < end; i++) {
      if (nums[i] > pivot) {
        [nums[big], nums[i]] = [nums[i], nums[big]];
        big++;
      }
    }
    [nums[end], nums[big]] = [nums[big], nums[end]];
    return big;
  }

  let left = 0;
  let right = nums.length - 1;
  let K = partition(left, right, nums);

  while (K !== k - 1) {
    if (K > k - 1) {
      right = K - 1;
    } 
    if (K < k - 1) {
      left = K + 1
    }
    K = partition(left, right, nums);
  }

  return nums[K];
};

export default findKthLargest;
