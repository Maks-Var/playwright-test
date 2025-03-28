import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

const username = 'покупатель1';
const password = 'покупатель1';

setup('Авторизация', async ({ page }) => {
  await page.goto('http://91.197.96.80/');
  await page.getByRole('textbox', {name: 'Логин'}).fill(username);
  await page.getByRole('textbox', {name: 'Пароль'}).fill(password);
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.waitForURL('http://91.197.96.80/');
  await page.context().storageState({ path: authFile });
});