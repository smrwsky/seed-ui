function isCSR(): boolean {
  return typeof window !== 'undefined';
}

export default isCSR;
