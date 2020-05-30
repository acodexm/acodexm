import LocalStorage from './localStorage';

describe('test if mocked localstorage works', () => {
  const TEST_KEY = 'TEST_KEY';
  const testData = { data: 'test' };
  test('set value', () => {
    LocalStorage.setItem(TEST_KEY, testData);
    expect(localStorage.getItem(TEST_KEY)).toEqual(JSON.stringify(testData));
  });
  test('get value', () => {
    const value = LocalStorage.getItem(TEST_KEY);
    expect(value).toEqual(testData);
  });
  test('remove value', () => {
    LocalStorage.remvoeItem(TEST_KEY);
    expect(LocalStorage.getItem(TEST_KEY)).toBeNull();
  });
  test('clean storage', () => {
    LocalStorage.setItem(TEST_KEY, testData);
    LocalStorage.clear();
    expect(LocalStorage.getItem(TEST_KEY)).toBeNull();
  });
});
