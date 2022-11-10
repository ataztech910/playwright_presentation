import { test, expect } from '@playwright/test';
import { Expectations } from './expectations';
import { Endpoints, SERVER_URL } from './namespace';

test('should trigger the api call', async ({ request }) => {
    const helloAPI = await request.get(`${SERVER_URL}/api/${Endpoints.HELLO}`);
    expect(helloAPI.ok()).toBeTruthy();
    expect(helloAPI.status()).toBe(200);
    expect(await helloAPI.json()).toEqual(expect.objectContaining(Expectations.hello));
  });