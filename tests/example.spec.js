// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  
  await page.goto('https://www.sima-land.ru/');
  await page.getByText('Войти').click()
  await page.locator('xpath=/html/body/div[6]/div/div/div[2]/div[4]/div/div/div/form/div[2]/div/div/div/div/div/input').fill('qa_test@test.ru');
  await page.locator('xpath=/html/body/div[6]/div/div/div[2]/div[4]/div/div/div/form/div[3]/div[1]/div/div[1]/div/div/input').fill('qa_test');
  await page.getByRole('button', { name: 'Войти' }).click();


});

