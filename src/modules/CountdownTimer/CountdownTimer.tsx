import { useState } from 'react';
import ReactInterval from 'react-interval';
import MainInputs from './MainInputs';
import SpeedControls from './SpeedControls';
import { splitMinutesAndSeconds } from './functions/splitMinutesAndSeconds';
import useTimeInput from './customHooks/useTimeInput';
import { parseTimeOrErr } from './functions/parseTimeOrErr';
import { setStartStopLabel } from './functions/setStartStopLabel';
import useTimerTextClass from './customHooks/useTimerTextClass';

export default function CountdownTimer() {
  const [timeInput, setTimeInput] = useState('');
  const [rawSeconds, setRawSeconds] = useTimeInput(timeInput);
  const [started, setStarted] = useState(false);
  const [interval, setInterval] = useState(1000);
  const timerTextClass = useTimerTextClass(rawSeconds, started);

  return (
    <div>
      <MainInputs 
        timeInput={timeInput}
        setTimeInput={setTimeInput}
        started={started}
        setStarted={setStarted}
        setStartStopLabel={setStartStopLabel}
      />

      {/* Countdown Display */}
      <ReactInterval
        timeout={interval}
        enabled={started}
        callback={() => { rawSeconds > 0 && setRawSeconds(rawSeconds - 1) }}
      />
      <h1 className={timerTextClass}>
        {parseTimeOrErr(rawSeconds, splitMinutesAndSeconds)}
      </h1>

      <SpeedControls setInterval={setInterval} />
    </div>
  )
}