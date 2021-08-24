export function parseTimeOrErr(rawSeconds: number, splitterCallback: Function) {
  if (Number.isNaN(rawSeconds) || rawSeconds < 0) {
    return 'Please enter a positive integer';
  }

  return splitterCallback(rawSeconds);
}
