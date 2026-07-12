class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const A = 'a'.charCodeAt(0);

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const ch of str) {
      count[ch.charCodeAt(0) - A]++;
    }

    const key = count.join("#");

    if (!map.has(key)) map.set(key, []);

    map.get(key)!.push(str);
  }

  return [...map.values()];

};

    }
