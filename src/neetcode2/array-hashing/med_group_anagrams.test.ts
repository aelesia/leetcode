import { expect, test } from 'vitest'

import { Solution } from './med_group_anagrams'

const sol = new Solution()

test('groups anagrams regardless of group or word order', () => {
  const normalize = (groups: string[][]) =>
    groups.map(group => [...group].sort()).sort((a, b) =>
      JSON.stringify(a).localeCompare(JSON.stringify(b))
    )

  expect(normalize(sol.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))).toEqual(
    normalize([['hat'], ['act', 'cat'], ['stop', 'pots', 'tops']])
  )
})

test('groups a single word', () => {
  expect(sol.groupAnagrams(['x'])).toEqual([['x']])
})

test('groups an empty string', () => {
  expect(sol.groupAnagrams([''])).toEqual([['']])
})
