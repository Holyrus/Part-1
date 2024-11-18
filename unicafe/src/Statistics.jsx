import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, All}) => {

  return (
    <div>
    {good || bad || neutral ?
      <div>
        <h1>statistics</h1>
        <table border={1}>
            <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={All}/>
            <StatisticLine text='average' value={(good - bad) / (All)}/>
            <StatisticLine text='positive' value={good / (All) * 100} text2='%'/>
            </tbody>
        </table>
      </div>
        : 
        <p>No feedback given</p>
    }
    </div>
  )
}

export default Statistics
