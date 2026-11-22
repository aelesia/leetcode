import { test } from 'vitest'

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    const wordMap: Record<string, number> = {}

    for (const char of s) {
      if (char in wordMap) {
        wordMap[char]++
      } else {
        wordMap[char] = 1
      }
    }

    console.log(wordMap)

    for (const char of t) {
      if (char in wordMap) {
        wordMap[char]--
      } else {
        wordMap[char] = -1
      }
    }

    for (const [key, value] of Object.entries(wordMap)) {
      if (value !== 0) {
        return false
      }
    }
    return true
  }
}

export { Solution }
