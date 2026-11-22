class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const valueToIndexMap: Record<number, number> = {}
    nums.forEach((num, index) => {
      valueToIndexMap[num] = index
    })

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const num2 = target - num

      if (num2 in valueToIndexMap) {
        const indexNum2 = valueToIndexMap[num2]
        if (i !== indexNum2) {
          return [i, indexNum2]
        }
      }
    }

    throw Error('number not found')
  }
}

export { Solution }
