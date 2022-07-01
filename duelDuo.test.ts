
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('click draw button', async () => {
    const displayed = await driver.findElement(By.id('draw')).click()
    expect(displayed).toBe(await driver.findElement(By.id('choices')))
})

test('click add duo', async () => {
    const displayed = await driver.findElement(By.id('bot-btn')).click()
    expect(displayed).toBe(await driver.findElement(By.id('player-duo')))
})


