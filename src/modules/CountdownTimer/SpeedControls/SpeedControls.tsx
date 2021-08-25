import { useRef, useState, useEffect } from 'react';
import './SpeedControls.scss';

export default function SpeedControls(props: { setInterval: Function }) {
  const [selectedButton, setSelectedButton] = useState({});
  const { setInterval } = props;

  const controlValues = [
    { milliseconds: 1000, label: '1x', ref: useRef('1x') },
    { milliseconds: 750, label: '1.5x', ref: useRef('1.5x') },
    { milliseconds: 500, label: '2x', ref: useRef('2x') }
  ];

  // useEffect(() => {
  //   // set all buttons to nothing

  //   // set the selected button only to class active
  //   selectedButton?.classList.add('active');
  // });

  return (
    <div>
      { controlValues.map(buttonConfig => (
        <button
          key={buttonConfig.label}
          onClick={() => { 
            setInterval(buttonConfig.milliseconds);
            setSelectedButton(buttonConfig.ref.current)
          }}
          className='control-button'
        >
          {buttonConfig.label}  
        </button>
      )) }
    </div>
  )
}