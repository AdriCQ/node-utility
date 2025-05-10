/**
 * useCurrency
 */
export function useCurrency() {
  /**
   * toCurrency
   * @param val
   * @param currency
   * @returns
   */
  function toCurrency(val?: number | string, currency = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });

    return isNaN(Number(val))
      ? formatter.format(0)
      : formatter.format(Number(val));
  }

  return {
    toCurrency,
  };
}
