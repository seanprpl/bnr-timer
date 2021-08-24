import MuiButton from '@material-ui/core/Button';

interface PropsShape {
  children: string,
  onClick: Function
}

function Button(props: PropsShape) {
  return <MuiButton>{ props.children }</MuiButton>
}

export default Button;