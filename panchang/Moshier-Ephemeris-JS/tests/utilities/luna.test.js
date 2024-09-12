import { getMeanAscendingNode, getMeanPerigee } from '../../src/utilities/luna'
import { util } from '../../src/utilities/util'

describe('getMeanAscendingNode', () => {
  it('calculates the mean lunar ascending node', () => {
    const julianDate = 2459032.000000 // July 1 2020, Noon UTC

    expect(getMeanAscendingNode(julianDate)).toBe(88.579820453364)
  })
})

describe('getMeanPerigee', () => {
  it('calculates the mean lunar ascending node', () => {
    const julianDate = 2459032.000000 // July 1 2020, Noon UTC

    expect(getMeanPerigee(julianDate)).toBe(197.43099268028448)
  })
})
