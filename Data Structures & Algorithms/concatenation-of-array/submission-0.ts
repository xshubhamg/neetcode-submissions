class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
          const ans: number[] = [];

  for (let i = 0; i < 2 * nums.length; i++) {
    if (i >= nums.length) ans.push(nums[i - nums.length]);
   else ans.push(nums[i]);
  }
  return ans;

    }
}
