export function convertDateFormat(dateStr: string): string {
  // Converts MM/DD/YYYY to YYYY-MM-DD
  const [month, day, year] = dateStr.split('/');
  const mm = month.padStart(2, '0');
  const dd = day.padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}
