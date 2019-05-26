import matchMedia from '../src/matchMedia'
import mockMatchMedia from './util/mockMatchMedia'

describe('matchMedia', () => {
  describe('Run on node', () => {
    it('should be undefined', () => {
      const mm = matchMedia('screen and (max-width: 700px)')

      expect(mm.mm).toBeUndefined()
    })
  })

  describe('Run on browser', () => {
    let mm
    let mockFn

    beforeAll(() => {
      window.matchMedia = mockMatchMedia(true)
      mockFn = jest.fn()

      mm = matchMedia('screen and (max-width: 800px)')
    })

    it('addListener', () => {
      mm.addListener(mockFn)

      expect(mm.mm.find(mockFn)).toBeTruthy()
    })

    it('removeListener', () => {
      mm.removeListener(mockFn)

      expect(mm.mm.find(mockFn)).toBeFalsy()
    })
  })
})