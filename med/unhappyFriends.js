/* eslint-disable no-unused-vars */
/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  let unhappyCount = 0;
  const prefMap = {};
  const pairMap = {};

  for (let i = 0; i < n; i++) {
    prefMap[i] = preferences[i];
  }

  for (let pair of pairs) {
    const [a, b] = pair;
    pairMap[a] = b;
    pairMap[b] = a;
  }

  for (let i = 0; i < n / 2; i++) {
    const [a, b] = pairs[i];

    const highestInterestForA = prefMap[a][0];
    if (highestInterestForA !== b) {
      const indexofB = prefMap[a].indexOf(b);
      const numsToCheckA = prefMap[a].slice(0, indexofB);

      unhappyCount += checkPreferences(numsToCheckA, prefMap, pairMap, a);
    }

    const highestInterestForB = prefMap[b][0];
    if (highestInterestForB !== a) {
      const indexofA = prefMap[b].indexOf(a);
      const numsToCheckB = prefMap[b].slice(0, indexofA);

      unhappyCount += checkPreferences(numsToCheckB, prefMap, pairMap, b);
    }
  }
  return unhappyCount;
};

function checkPreferences(nums, prefMap, pairMap, element) {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const indexOfBOnPartner = prefMap[currentNum].indexOf(element);
    const indexOfPartner = prefMap[currentNum].indexOf(pairMap[currentNum]);

    if (indexOfBOnPartner < indexOfPartner) {
      return 1;
    }
  }
  return 0;
}
