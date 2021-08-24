export function splitMinutesAndSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds < 60
    ? seconds
    : seconds % (minutes * 60);
  //console.log('minutes and remainingSeconds :>> ', minutes, remainingSeconds);
  const stringedMin = minutes < 10
    ? `0${minutes.toString()}`
    : minutes.toString();
  const stringedSec = remainingSeconds < 10
    ? `0${remainingSeconds.toString()}`
    : remainingSeconds.toString();
  return `${stringedMin}:${stringedSec}`;
}
