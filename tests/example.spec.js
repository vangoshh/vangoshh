// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  
  await page.goto('https://www.sima-land.ru/');
  await page.getByText('Войти').click()
  await page.locator('#entry-forms > div > div > div.os-host.os-host-foreign.os-theme-dark.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.UyGd8w.iHougY.os-host-flexbox.os-host-overflow.os-host-overflow-y.os-host-transition > div.os-padding > div > div > div > form > div.aLWWUx > div > div > div > div > div > input').fill('qa_test@test.ru');
  await page.locator('#entry-forms > div > div > div.os-host.os-host-foreign.os-theme-dark.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.UyGd8w.iHougY.os-host-flexbox.os-host-overflow.os-host-overflow-y.os-host-transition > div.os-padding > div > div > div > form > div.cvONT1 > div.qmWmnS.owFhzM > div > div.JHtjBG > div > div > input').fill('qa_test');
  await page.getByRole('button', { name: 'Войти' }).click();


});

