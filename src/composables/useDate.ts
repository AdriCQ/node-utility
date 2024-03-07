/**
 * useDate
 * @returns
 */
export function useDate() {
  /**
   * readableDate
   * @param date
   * @returns
   */
  function readableDate(date: string) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Date(date).toLocaleDateString('es-ES', options);
  }

  return {
    readableDate,
  };
}
