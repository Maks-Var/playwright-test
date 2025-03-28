// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://91.197.96.80/');
  });

  test('Наличие заголовка страницы', async ({ page }) => {  
    await expect(page).toHaveTitle('edutesting.frontend');
  });
  
  test('Есть название формы авторизации', async ({page}) => {
    const form_name = page.locator('.d-flex .fs-2');
    await expect(form_name).toContainText('Авторизация')
  });

  test('Есть поле Логин с заголовком', async ({page}) => {
    const login_field_title = page.locator('.mb-3 .form-label');
    await expect(login_field_title).toContainText('Логин');

    const login_field = page.getByRole('textbox', {name: 'Логин'});
    await expect(login_field).toBeVisible();
  });

  test('Есть поле Пароль с заголовком', async ({page}) => {
    const password_field_title = page.locator('.mb-5 .form-label');
    await expect(password_field_title).toContainText('Пароль');

    const password_field = page.getByRole('textbox', {name: 'Пароль'});
    await expect(password_field).toBeVisible();
  });

  test('Есть кнопка Войти', async ({page}) => {
    const enter_button = page.locator('.d-grid .btn-primary');
    await expect(enter_button).toContainText('Войти');
    await expect(enter_button).toBeVisible();
    await expect(enter_button).toHaveCSS('color','rgb(255, 255, 255)');
    await expect(enter_button).toHaveCSS('background-color', 'rgb(13, 110, 253)');
  });

  test('Прохождение авторизации', async ({page}) => {
    const login_field = page.getByRole('textbox', {name: 'Логин'});
    const password_field = page.getByRole('textbox', {name: 'Пароль'});
    await page.getByRole('textbox', {name: 'Логин'}).fill('покупатель1');
    await page.getByRole('textbox', {name: 'Пароль'}).fill('покупатель1');
    await page.getByRole('button', { name: 'Войти' }).click();
  });



