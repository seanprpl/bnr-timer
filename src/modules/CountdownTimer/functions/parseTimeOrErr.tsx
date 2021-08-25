export function parseTimeOrErr(rawSeconds: number, splitterCallback: Function) {
  if (Number.isNaN(rawSeconds) || rawSeconds < 0) {
    return 'Enter a positive integer';
  }

  return splitterCallback(rawSeconds);
}
