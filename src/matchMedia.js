class MatchMedia {
  constructor (mq) {
    this.mm = typeof window === 'undefined' || typeof window.matchMedia === 'undefined' ? undefined : window.matchMedia(mq)
  }

  addListener (func) {
    if (this.mm) {
      this.func = func

      this.mm.addListener(func)
    }
  }

  removeListener () {
    if (this.mm && this.func) this.mm.removeListener(this.func)
  }
}

export default function matchMedia (mq) {
  return new MatchMedia(mq)
}