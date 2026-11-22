import { expect, test } from 'vitest'

import { Solution } from './02_two_sum'

const sol = new Solution()

test('example#1', () => {
  expect(sol.twoSum([3, 4, 5, 6], 7)).toEqual([0, 1])
  expect(sol.twoSum([4, 5, 6], 10)).toEqual([0, 2])
  expect(sol.twoSum([5, 5], 10)).toEqual([0, 1])
})
