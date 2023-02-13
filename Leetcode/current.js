/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!m && !n) return [];
  if (!m) return nums2;
  if (!n) return nums1;

  nums1 = [...nums1, ...nums2].sort((a, b) => a - b);
  return nums1.slice(n);
};
console.log('Merge', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));