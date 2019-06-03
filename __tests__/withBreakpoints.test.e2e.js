import path from 'path'
import puppeteer from 'puppeteer'

const ASYNC_TIME_OUT = 15000
const TEST_URL = 'http://localhost:3001'

describe('withBreakpoints', () => {
  let page
  let browser

  beforeAll(async done => {
    browser = await puppeteer.launch({ headless: true })

    done()
  })

  beforeEach(async done => {
    page = await browser.newPage()

    await page.goto(TEST_URL)
    await page.addScriptTag({ path: path.resolve(__dirname, '..', 'dist', 'tests', 'bundle.js') })

    done()
  })

  afterEach(async done => {
    await page.close()

    done()
  })

  afterAll(async done => {
    await browser.close()

    done()
  })

  it('screen width is 768px, expect render mobile text', async () => {
    await page.emulate({
      viewport: {
        width: 768,
        height: 1200
      },
      userAgent: ''
    })

    await page.evaluate(() => {
      const container = document.getElementById('react-root')
      const mqs = [
        { name: 'pc', mq: 'screen and (min-width: 769px)' },
        { name: 'mobile', mq: 'screen and (max-width: 768px)' }
      ]

      window.renderWithBreakpoints(mqs, container)
    })

    const text = await page.$eval('#component', el => el.innerText)

    expect(text).toEqual('mobile')
  }, ASYNC_TIME_OUT)

  it('screen width is 769px, expect render pc text', async () => {
    await page.emulate({
      viewport: {
        width: 769,
        height: 1200
      },
      userAgent: ''
    })

    await page.evaluate(() => {
      const container = document.getElementById('react-root')
      const mqs = [
        { name: 'pc', mq: 'screen and (min-width: 769px)' },
        { name: 'mobile', mq: 'screen and (max-width: 768px)' }
      ]

      window.renderWithBreakpoints(mqs, container)
    })

    const text = await page.$eval('#component', el => el.innerText)

    expect(text).toEqual('pc')
  }, ASYNC_TIME_OUT)

  it('screen width 768px to 900px, will be render mobile first then pc', async () => {
    await page.emulate({
      viewport: {
        width: 768,
        height: 1200
      },
      userAgent: ''
    })

    await page.evaluate(() => {
      const container = document.getElementById('react-root')
      const mqs = [
        { name: 'pc', mq: 'screen and (min-width: 769px)' },
        { name: 'mobile', mq: 'screen and (max-width: 768px)' }
      ]

      window.renderWithBreakpoints(mqs, container)
    })

    let text = await page.$eval('#component', el => el.innerText)

    expect(text).toEqual('mobile')

    await page.waitFor(10)

    await page.setViewport({
      width: 900,
      height: 1200
    })

    text = await page.$eval('#component', el => el.innerText)

    expect(text).toEqual('pc')
  }, ASYNC_TIME_OUT)
})