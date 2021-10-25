export function ID(...parts: Array<string | number>): string {
  return parts.join('-');
}
