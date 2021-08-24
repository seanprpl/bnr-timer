import { useState, useEffect } from "react";

/*
  set timer's text color and blink state
*/
export default function useTimerTextClass(rawSeconds: number, started: boolean) {
  const [timerTextClass, setTimerTextClass] = useState('');

  useEffect(() => {
    if (rawSeconds > -1 && started) {
      if (rawSeconds > 20) { setTimerTextClass('black'); }
      else { 
        setTimerTextClass('red'); 

        if (rawSeconds < 11) {
          const oddSecond = rawSeconds % 2 === 1;
          if (oddSecond) { setTimerTextClass('hidden'); }
          else { setTimerTextClass('red viewable'); }
        }
      }
    }
  }, [rawSeconds, started]);
  
  return timerTextClass;
}