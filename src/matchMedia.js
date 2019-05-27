class MatchMedia {
  constructor (mq) {
    this.mm = typeof window === 'undefined' || typeof window.matchMedia === 'undefined' ? undefined : window.matchMedia(mq)
  }

  addListener (func) {
    if (!this.mm) return

    this.func = func
    this.mm.addListener(func)
  }

  removeListener () {
    if (!(this.mm && this.func)) return

    this.mm.removeListener(this.func)
  }

  getMatches (defaultMatches = true) {
    return !this.mm || typeof this.mm.matches === 'undefined' ? defaultMatches : this.mm.matches
  }

  getMediaQueryList () {
    return this.mm
  }
}

export default function matchMedia (mq) {
  return new MatchMedia(mq)
}