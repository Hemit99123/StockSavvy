export function greeter(hour: number): string {
  if (hour < 0 || hour > 23) throw new Error("Hour must be between 0 and 23");

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 21) return "Good evening";
  return "Good night";
}
