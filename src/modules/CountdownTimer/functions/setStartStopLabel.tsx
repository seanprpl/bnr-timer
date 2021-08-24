export function setStartStopLabel(isStarted: boolean) {
  if (isStarted) {
    return 'Pause';
  }

  return 'Start/Resume';
}
