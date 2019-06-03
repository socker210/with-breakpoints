import matchMedia from '../src/matchMedia'
import mockMatchMedia from './util/mockMatchMedia'

describe('matchMedia', () => {
  describe('Run on node', () => {
    let mm

    beforeAll(() => {
      mm = matchMedia('screen and (max-width: 700px)')
    })

    it('should be undefined', () => {
      expect(mm.getMediaQueryList()).toBeUndefined()
    })

    it('getMatches', () => {
      expect(mm.getMatches(false)).toBeFalsy()
    })
  })

  describe('Run on browser', () => {
    let mm
    let mockFn

    beforeAll(() => {
      window.matchMedia = mockMatchMedia(false)
      mockFn = jest.fn()

      mm = matchMedia('screen and (max-width: 800px)')
    })

    it('getMatches', () => {
      expect(mm.getMatches()).toBeFalsy()
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