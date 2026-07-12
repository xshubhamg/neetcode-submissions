class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
          const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const result = [];
  for (let i = 0; i < k; i++) {
    const max = Math.max(...[...map.values()]);
    const key = [...map.entries()].find(([_, value]) => value === max)?.[0];
    result.push(key);
    map.delete(key!);
  }

  return result as number[];

    }
}
