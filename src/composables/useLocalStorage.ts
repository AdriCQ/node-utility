import { useCrypt } from './useCrypt';
/**
 * useStorage
 * @param key
 * @param encrypted
 * @returns
 */
export function useStorage<T = unknown>(key: string, encrypted = false) {
  const { decode, encode } = useCrypt<T>();
  return {
    get: () => {
      const data = localStorage.getItem(`${window.location.host}/${key}`);
      if (data) {
        return encrypted ? decode(data) : (JSON.parse(data) as T);
      }
      return null;
    },
    set: (data: T) => {
      const storeData = encrypted ? encode(data) : JSON.stringify(data);

      localStorage.setItem(`${window.location.host}/${key}`, storeData);

      return storeData;
    },
    remove: () => localStorage.removeItem(`${window.location.host}/${key}`),
  };
}
