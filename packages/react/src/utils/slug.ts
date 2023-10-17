export function slug(...fragments: Array<number | string | undefined>): string {
  return fragments
    .filter((item) => item != null)
    .join('-')
    .toLowerCase();
}
