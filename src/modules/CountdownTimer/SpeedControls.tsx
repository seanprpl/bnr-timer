export default function SpeedControls(props: { setInterval: Function }) {
  const { setInterval } = props;

  return (
    <div>
      <button onClick={() => setInterval(1000)}>1x</button>
      <button onClick={() => setInterval(750)}>1.5x</button>
      <button onClick={() => setInterval(500)}>2x</button>
    </div>
  )
}