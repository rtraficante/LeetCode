/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const array = [];
  let oneIdx = 0;
  let twoIdx = 0;

  while (array.length !== nums1.length + nums2.length) {
    if (oneIdx === nums1.length) {
      array.push(nums2[twoIdx]);
      twoIdx++;
      continue;
    }

    if (twoIdx === nums2.length) {
      array.push(nums1[oneIdx]);
      oneIdx++;
      continue;
    }

    if (nums1[oneIdx] <= nums2[twoIdx]) {
      array.push(nums1[oneIdx]);
      oneIdx++;
    } else {
      array.push(nums2[twoIdx]);
      twoIdx++;
    }
  }

  const mid = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    return array[mid];
  }
  return (array[mid - 1] + array[mid]) / 2;
};
