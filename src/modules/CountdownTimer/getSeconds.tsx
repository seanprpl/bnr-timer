export function getSeconds(minutesAndSeconds: string): number {
  const timeDigits = minutesAndSeconds.split('');
  //console.log('timeDigits initial:>> ', timeDigits);
  if (timeDigits.length === 1 || timeDigits.length === 2) {
    const seconds = Number(timeDigits.join("")) ?? 0;
    return seconds;
  }

  const minutes = [];
  while (timeDigits.length > 2) {
    minutes.push(timeDigits.shift()); // add to front of minutes array, the removed head of timeDiggits array

    //console.log('timeDigits while:>> ', timeDigits);
  }

  const minutesNum = Number(minutes.join(''));
  //console.log('minutesNum :>> ', minutesNum);
  const secondsNum = Number(timeDigits.join(''));
  //console.log('secondsNum :>> ', secondsNum);;
  const trueSeconds: number = (minutesNum * 60) + secondsNum ?? 0;
  //console.log('trueSeconds :>> ', trueSeconds);
  return trueSeconds ?? 0;
}
