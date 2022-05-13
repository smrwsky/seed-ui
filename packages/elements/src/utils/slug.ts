function slug(...fragments: Array<number | string>): string {
  return fragments.join('-').toLowerCase();
}

export default slug;
