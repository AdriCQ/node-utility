/**
 * usePhone
 */
export function usePhone() {
  function isCubanPhoneNumber(
    phoneNumber: string,
    { withPrefix = false },
  ): boolean {
    // Regular expression to match phone numbers starting with +53 followed by 8 digits
    const regex = withPrefix ? /^\+53\d{8}$/ : /^\d{8}$/;

    // Test the phone number against the regex
    return regex.test(phoneNumber);
  }

  function formatCubanPhoneNumber(phoneNumber: string) {
    // Eliminar espacios en blanco
    let formattedNumber = phoneNumber.replace(/\D+/g, '');

    if (formattedNumber.length > 8) {
      formattedNumber = formattedNumber.slice(-8);
    }
    return formattedNumber;
  }

  return {
    isCubanPhoneNumber,
    formatCubanPhoneNumber,
  };
}
