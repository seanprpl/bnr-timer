import { useState } from 'react';
import ReactInterval from 'react-interval';
import MainInputs from './MainInputs/MainInputs';
import SpeedControls from './SpeedControls/SpeedControls';
import { splitMinutesAndSeconds } from './functions/splitMinutesAndSeconds';
import useTimeInput from './customHooks/useTimeInput';
import { parseTimeOrErr } from './functions/parseTimeOrErr';
import { setStartStopLabel } from './functions/setStartStopLabel';
import useTimerTextClass from './customHooks/useTimerTextClass';
import './CountdownTimer.scss';

export default function CountdownTimer() {
  const [timeInput, setTimeInput] = useState('');
  const [rawSeconds, setRawSeconds] = useTimeInput(timeInput);
  const [started, setStarted] = useState(false);
  const [interval, setInterval] = useState(1000);
  const timerTextClass = useTimerTextClass(rawSeconds, started);

  return (
    <div id="container">
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
      <h1 id='timerText' className={`regular-text ${timerTextClass}`}>
        {parseTimeOrErr(rawSeconds, splitMinutesAndSeconds)}
      </h1>

      <SpeedControls setInterval={setInterval} />
    </div>
  )
}