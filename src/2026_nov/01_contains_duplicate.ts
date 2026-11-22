class Solution {
  hasDuplicate(nums: number[]): boolean {
    const map: Record<number, boolean> = {}
    for (const num of nums) {
      console.log(num)
      if (map[num]) {
        return true
      }
      map[num] = true
    }
    return false
  }
}

export { Solution }
