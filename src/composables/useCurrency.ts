export function useCurrency() {
  /**
   * toCurrency
   * @param val
   * @returns
   */
  function toCurrency(val?: number | string) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return isNaN(Number(val))
      ? formatter.format(0)
      : formatter.format(Number(val));
  }

  return {
    toCurrency,
  };
}
