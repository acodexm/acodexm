export interface ILocalStorageConfigKey {
  key: string;
  path: string;
  value?: any | null;
}

export interface ILocalStorageConfig {
  keys: ILocalStorageConfigKey[];
}

const DEFAULT_CONFIG: ILocalStorageConfig = {
  keys: [
    {
      key: 'theme',
      path: 'system.theme'
    },
    {
      key: 'language',
      path: 'system.language'
    }
  ]
};

/**
 * Local Storage class
 */
class LocalStorage {
  private static config: ILocalStorageConfig = DEFAULT_CONFIG;

  private constructor() {}

  public static configure(config: ILocalStorageConfig): void {
    this.config = config;
  }

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
}

export default LocalStorage;
