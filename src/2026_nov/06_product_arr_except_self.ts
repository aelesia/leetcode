class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  // productExceptSelf(nums: number[]): number[] {
  //   const result = []
  //   for (let i = 0; i < nums.length; i++) {
  //     const product = nums.reduce((total, num, index) => {
  //       if (index === i) {
  //         return total
  //       }
  //       return total * num
  //     }, 1)
  //     result.push(product)
  //   }
  //   return result
  // }

  productExceptSelf(nums: number[]): number[] {
    const productLeft: number[] = []
    const productRight: number[] = []

    for (let i = 0; i < nums.length i++) {
      if (i === 0) {
        productLeft[i] = 1
        continue
      }
      productLeft[i] = productLeft[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
      if (i === nums.length - 1) {
        productRight[i] = 1
        continue
      }
      productRight[i] = productRight[i + 1] * nums[i + 1]
    }

    return nums.map((_, index) => productLeft[index] * productRight[index])
  }
}
