
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

// test('click draw button', async () => {
//     const displayed = await driver.findElement(By.id('draw')).click()
//     expect(displayed).toBe(await driver.findElement(By.id('choices')))
// })

// test('click add duo', async () => {
//     const displayed = await driver.findElement(By.id('bot-btn')).click()
//     expect(displayed).toBe(await driver.findElement(By.id('player-duo')))
// })

test('"draw" button displays choices section', async () => {
    // await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click()
    // await driver.sleep(2000)
    const choicesSection = await driver.findElement(By.id('choices'))
    const displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
})

test('"Remove from Duo" button puts robot back into choices section', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const plalyerDuoSection = await driver.findElement(By.id('player-duo'))
    const selectedRobotName = await driver.findElement(By.xpath('//div[@id="player-duo"]/div/h3')).getText()
    await driver.findElement(By.xpath('//button[text()="Remove from Duo"]')).click()
    const returnedRobot = await driver.findElement(By.xpath('//div[@id="choices"]/div/h3[contains(text(),' + selectedRobotName + ')]'))
    const displayed = await returnedRobot.isDisplayed()
    expect(displayed).toBe(true)
})