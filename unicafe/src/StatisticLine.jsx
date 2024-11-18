

const StatisticLine = (props) => {
  return (
    <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.text2}</td>
    </tr>
  )
}

export default StatisticLine
