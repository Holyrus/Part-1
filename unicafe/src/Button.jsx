

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handlerClick}>{props.text}</button>
    </div>
  )
}

export default Button
