export function slug(...fragments: Array<number | string | undefined>): string {
  return fragments.filter(Boolean).join('-').toLowerCase();
}
