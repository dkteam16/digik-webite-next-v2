export type ClassValue = any;

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(10)
    .filter(Boolean)
    .join(" ");
}
