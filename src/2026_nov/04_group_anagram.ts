function createBaseAnagramObj(): Record<string, number> {
  return {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  }
}

function toAnagram(str: string): string {
  const baseAnagram = createBaseAnagramObj()
  for (const char of str) {
    baseAnagram[char] = baseAnagram[char] + 1
  }
  return JSON.stringify(baseAnagram)
}

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    const anagramStrMap: Record<string, string[]> = {}

    for (const str of strs) {
      const anagram = toAnagram(str)
      if (anagramStrMap[anagram] == null) {
        anagramStrMap[anagram] = [str]
      } else {
        anagramStrMap[anagram].push(str)
      }
    }

    return Object.values(anagramStrMap)
  }
}
