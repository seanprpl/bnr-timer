import Button from '../../components/Button/Button';

interface ButtonOptions {
  label: string;
  onClick: Function
}

interface PropsShape {
  options: ButtonOptions[]
}

export default function Controls(props: PropsShape) {
  const { options } = props;

  return (
    <div>
      { options
        .map((option: ButtonOptions) => {
          const { label, onClick } = option;
          return <Button onClick={onClick}>{label}</Button>
        }
      )
    }
  </div>
  )
}