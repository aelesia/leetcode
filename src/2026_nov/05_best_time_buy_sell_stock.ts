class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let lowestPrice = Number.MAX_VALUE
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
      const todaysPrice = prices[i]
      lowestPrice = Math.min(lowestPrice, todaysPrice)
      maxProfit = Math.max(todaysPrice - lowestPrice, maxProfit)
      console.log({ i, lowestPrice, maxProfit })
    }

    return maxProfit
  }
}
