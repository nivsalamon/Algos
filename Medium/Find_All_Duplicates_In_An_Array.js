// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.

// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]


var findDuplicates = function(nums) {
  var storage = {};
  var duplicates = [];

  for(var i = 0; i < nums.length; i++){
    if(!storage.hasOwnProperty(nums[i])){
      storage[nums[i]] = 1;
    } else {
      duplicates.push(nums[i]);
    }
  }
  return duplicates;
};
