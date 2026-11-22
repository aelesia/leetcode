import { expect, test } from 'vitest'

import { Solution } from './med_two_integer_sum_2'

const sol = new Solution()

test('finds two positive numbers', () => {
  expect(sol.twoSum([1, 2, 3, 4], 3)).toEqual([1, 2])
})

test('finds a pair containing zero', () => {
  expect(sol.twoSum([0, 3, 4, 6], 3)).toEqual([0, 3])
})

test('finds a pair with a zero sum', () => {
  expect(sol.twoSum([-3, 0, 3, 4], 0)).toEqual([-3, 3])
})

test('finds a pair at opposite ends of the array', () => {
  expect(sol.twoSum([-1, 3, 4, 7, 8], 7)).toEqual([-1, 8])
})
