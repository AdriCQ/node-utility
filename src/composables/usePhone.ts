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

  function formatCubanPhoneNumber(phoneNumber: string, { withPrefix = false }) {
    // Eliminar espacios en blanco
    let formattedNumber = phoneNumber.replace(/\s+/g, '');

    // Verificar si el número ya comienza con +53
    if (withPrefix && !formattedNumber.startsWith('+53')) {
      // Si no comienza con +53, agregarlo
      formattedNumber = '+53' + formattedNumber;
    }

    // Asegurarse de que solo queden los primeros 8 dígitos después de +53
    formattedNumber = withPrefix
      ? formattedNumber.slice(0, 3) + formattedNumber.slice(3).slice(0, 8)
      : formattedNumber.slice(0, 8);

    return formattedNumber;
  }

  return {
    isCubanPhoneNumber,
    formatCubanPhoneNumber,
  };
}
