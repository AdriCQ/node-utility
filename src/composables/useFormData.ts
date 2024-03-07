import { serialize } from 'object-to-formdata';

/**
 * useFormData
 * @returns
 */
export function useFormData() {
  const options = {
    /**
     * include array indices in FormData keys
     * defaults to false
     */
    indices: true,

    /**
     * treat null values like undefined values and ignore them
     * defaults to false
     */
    nullsAsUndefineds: false,

    /**
     * convert true or false to 1 or 0 respectively
     * defaults to false
     */
    booleansAsIntegers: true,

    /**
     * store arrays even if they're empty
     * defaults to false
     */
    allowEmptyArrays: false,

    /**
     * don't include array notation in FormData keys for any attributes except Files in arrays
     * defaults to false
     */
    noAttributesWithArrayNotation: false,

    /**
     * don't include array notation in FormData keys for Files in arrays
     * defaults to false
     */
    noFilesWithArrayNotation: false,

    /**
     * use dots instead of brackets for object notation in FormData keys
     * defaults to false
     */
    dotsForObjectNotation: false,
  };

  return {
    serialize: <T>(data: T) => serialize(data, options) as T,
    /**
     * urlToFile
     * @param url
     * @param filename
     * @param mimeType
     * @returns
     */
    urlToFile(base64: string, type = 'application/octet-stream') {
      const binStr = atob(base64);
      const len = binStr.length;
      const arr = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
      }
      return new Blob([arr], { type: type });
    },

    /**
     * convertImageToBase64
     * @param imgUrl
     * @param callback
     */
    async convertImageToBase64(
      imgUrl: string,
      callback: (base: string) => void,
    ) {
      const getBase64StringFromDataURL = (dataURL: string) =>
        dataURL.replace('data:', '').replace(/^.+,/, '');

      const res = await fetch(imgUrl, { mode: 'no-cors' });
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const base64 = getBase64StringFromDataURL(reader.result);
        callback(base64);
      };
      reader.readAsDataURL(blob);
    },
  };
}
