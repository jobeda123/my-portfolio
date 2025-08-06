export const getTotalYears = (startDate: Date, endDate: Date): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let years = end.getFullYear() - start.getFullYear();
  const m = end.getMonth() - start.getMonth();

  if (m < 0 || (m === 0 && end.getDate() < start.getDate())) {
    years--;
  }

  return years;
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  const startFormatted = start.toLocaleDateString(undefined, options);
  const endFormatted = end.toLocaleDateString(undefined, options);

  return `${startFormatted} - ${endFormatted}`;
}