interface PropsShape {
  timeInput: string;
  setTimeInput: Function;
  started: boolean;
  setStarted: Function;
  setStartStopLabel: Function;
}

// Input time to count down, and start/stop
export default function MainInputs(props: PropsShape) {
  const { timeInput, setTimeInput, started, setStarted, setStartStopLabel } = props;

  return (
      <form>
        <div>
          <label>Countdown: </label>
          <input 
            type='text' 
            value={timeInput} 
            onChange={e => setTimeInput(e.target.value)} 
            placeholder='MM:SS'
          />
          <button
            onClick={e => {
              e.preventDefault();
              setStarted(!started);
            }}
          >
            {setStartStopLabel(started)}
          </button>
        </div>
      </form>
  );
}
