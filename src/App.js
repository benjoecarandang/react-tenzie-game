import React from "react"
import Dice from "./components/Dice"
import diceData from "./diceData"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

import './styles.css';

function App() {
  const [tenzies, setTenzies] = React.useState(setDiceData())
  const [win, setWin] = React.useState(false)

  React.useEffect(() => {
    const result = tenzies.every(element => {
      return element.defaultNum === tenzies[0].defaultNum && element.selected ? true : false
    });
  
    if(result) {
      setWin(true)
    }
  }, [tenzies])

  function setDiceData() {
    const newArr = []

    for(var x = 0; x < 10; x++) {
      newArr.push({
        id: nanoid(),
        selected: false,
        defaultNum: getRandomNumber()
      })
    }

    return newArr;
  }

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  function rollDice() {
    if(!win) {
      setTenzies(prevTenzies => prevTenzies.map(item => {
        return (
          item.selected
          ? item
          : {...item, defaultNum: getRandomNumber(), selected: false }
        )
      }))
    } else {
      setTenzies(setDiceData())
      setWin(false)
    }
  }

  function toggleDice(id) {
    setTenzies(prevTenzies => prevTenzies.map(item => {
        return item.id === id ? {...item, selected: !item.selected} : item
    }))
  }

  const tenzieItems = tenzies.map(item =>  {
    return (
      <Dice
        key={item.id}
        diceNumber={item.defaultNum}
        toggle={() => toggleDice(item.id)}
        selected={item.selected}
      />
    )
  })

  return (
    <main>
      {win && <Confetti />}
      <div className="title">
        <h1>Tenzies</h1>
        <h3>
          Roll until all dice are the same. Click each die
          to freeze it at its current value between rolls.
        </h3>
      </div>

      <div className="dice-container">
        {tenzieItems}
      </div>

      <div className="dice-container--roll">
          <button onClick={rollDice}>{win ? "Play again" : "Roll"}</button>
      </div>
    </main>
  );
}

export default App;
