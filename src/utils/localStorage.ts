export const APPLICATION_THEME = 'APPLICATION_THEME';
export const APPLICATION_LANGUAGE = 'APPLICATION_LANGUAGE';

/**
 * Local Storage class
 */
class LocalStorage {
  public static getItem(key: string): any {
    try {
      let data = localStorage.getItem(key);
      if (!data) return null;
      data = JSON.parse(data);
      return data;
    } catch (error) {
      console.error('getItem', error);
    }
  }

  public static setItem(key: string, data: any): void {
    try {
      data = JSON.stringify(data);
      localStorage.setItem(key, data);
    } catch (error) {
      console.error('setItem', error);
    }
  }

  public static remvoeItem(key: string): void {
    localStorage.removeItem(key);
  }
  public static clear(): void {
    localStorage.clear();
  }
}

export default LocalStorage;
