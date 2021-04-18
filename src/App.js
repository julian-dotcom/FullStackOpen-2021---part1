//Part 1 - 1.1-1.5
/*
import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Parts = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    props.parts.map((part, i) => (
        <Parts key={i} part={part.name} exercises={part.exercises} />
  )))};

  
const Total = (props) => {
  let total = 0;
  props.parts.forEach(part => total += part.exercises);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
*/


//exercises 1.6 - 1.14
/*
import React, { useState } from 'react'

const Buttons = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
  return (  
    <div>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
    </div>
  )
}

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    )
  }
  let all = good + neutral + bad;
  let average = (good - bad)/(good + neutral+ bad);
  let positive = good/all;
  return (
    <div>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return (
      <tr>
        <td><h2>{props.text}:</h2></td>
        <td><h2>{props.value}</h2></td>
      </tr>
  )


}

const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      
      <Buttons good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      
      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App


*/

//Exercises 1.12-1.14
/*
import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [most, setPopular] = useState(0);

  const getRandom = () => {
    let random =  Math.round(Math.random() * 5);
    setSelected(random);
  }

  const vote = () => {
      const copy = [...votes];
      copy[selected] += 1;
      setVotes(copy);
      topQuote(copy);
  }

  const topQuote = (arr) => {
    let maxIndex = 0;
    arr.forEach((vote, index) => {
      if (vote > votes[maxIndex]) {
        maxIndex = index;
      }
    })
    setPopular(maxIndex);
  }

  return (
    <div>
      <h1>Current Anecdote:</h1>
      <h2>{anecdotes[selected]}</h2>
      <h2>Has {votes[selected]} votes </h2>
      <button onClick={vote}>vote</button>
      <button onClick={getRandom}>next quote</button>
      <br />
      <h1>Anecdote with most votes:</h1>
      <h2>{anecdotes[most]}</h2>
    </div>
  )
}


export default App

*/

