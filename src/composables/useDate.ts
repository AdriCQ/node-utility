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

  function prettySince(date: Date) {
    // difference in milliseconds
    const now = new Date();
    const milliseconds = now.getTime() - date.getTime();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 30;

    // Less than or equal to 1 hours
    if (milliseconds <= hour) {
      const minutes = Math.floor(milliseconds / minute);
      return `${minutes} minutos`;
    }
    // Less than or equal to 24 hours
    if (milliseconds <= day) {
      const hours = Math.floor(milliseconds / hour);
      return `${hours} horas`;
    }
    // More than 24 hours but less than a week
    else if (milliseconds <= week) {
      const days = Math.floor(milliseconds / day);
      return `${days} días`;
    }
    // More than a week but less than a month
    else if (milliseconds <= month) {
      const weeks = Math.floor(milliseconds / week);
      return `${weeks} semanas`;
    }
    // More than one month
    else {
      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }

  return {
    readableDate,
    prettySince,
  };
}
