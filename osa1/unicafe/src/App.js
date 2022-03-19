import { useState } from 'react'


const Statistics = (props) => {
    if(props.allClicks === 0){
        return(
            <div>
                No feedback given
            </div>
        )
    }

    const StatisticsLine = (props) =>{
        return(
            <div>
                <p>{props.text} {props.value}</p>
            </div>
        )
    }

    
    const all = props.good + props.neutral + props.bad
    const avg = ((props.good-props.bad)/all).toFixed(1)
    const pos = (props.good/all*100).toFixed(1)+ '%'
    return(
        <div>
            <table>
                <tr>
                    <td><StatisticsLine text='good'/></td>
                    <td><StatisticsLine value={props.good} /></td>
                </tr>
                <tr>
                    <td><StatisticsLine text='neutral'/></td>
                    <td><StatisticsLine value={props.neutral} /></td>
                </tr>
                <tr>
                    <td><StatisticsLine text='bad'/></td>
                    <td><StatisticsLine value={props.bad} /></td>
                </tr>
                <tr>
                    <td><StatisticsLine text='all'/></td>
                    <td><StatisticsLine value={all} /></td>
                </tr>
                <tr>
                    <td><StatisticsLine text='average'/></td>
                    <td><StatisticsLine value={avg}/></td>
                </tr>
                <tr>
                    <td><StatisticsLine text='positive'/></td>
                    <td><StatisticsLine value={pos} /></td>
                </tr>
            </table>
        </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)


  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
      setBad(bad + 1)
  }

  const Button = (props) => {
    console.log(props)
    const { handleClick, text } = props
    return (
    <button onClick={handleClick}>
      {text}
    </button>
    )
  }

  return (
    <div>
        <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <h2>statistics</h2>
      <div>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App