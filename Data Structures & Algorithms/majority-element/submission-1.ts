class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const map = new Map<number, number>();

        for(const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        let result = 0;
        for( const key of map.keys()) {
            if(map.get(key) > Math.floor(nums.length / 2)) {
                result = key
            }
        }
        return result;
    }
}
