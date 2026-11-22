import { expect, test } from 'vitest'
import { Solution } from './01_contains_duplicate'

test('returns false when all numbers are unique', () => {
  const a = new Solution()
  expect(a.hasDuplicate([1, 2, 3, 4])).toEqual(false)
})
