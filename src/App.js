import { useState, useEffect, useMemo, useCallback } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import "./styles.css";

function App() {
  const [tenzies, setTenzies] = useState(setDiceData());
  const [win, setWin] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const result = tenzies.every((element) => {
      return element.defaultNum === tenzies[0].defaultNum && element.selected
        ? true
        : false;
    });

    if (result) {
      setWin(true);
      setIsGameStart(false);
      setIsInitial(true);
    }
  }, [tenzies]);

  useEffect(() => {
    let interval;

    if(!isInitial) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isGameStart, win]);

  function setDiceData() {
    const newArr = [];

    for (var x = 0; x < 10; x++) {
      newArr.push({
        id: nanoid(),
        selected: false,
        defaultNum: getRandomNumber(),
      });
    }

    return newArr;
  }

  function getRandomNumber() {
    return Math.ceil(Math.random() * 2);
  }

  function gameStart() {
    setRollCount(0);
    setIsGameStart(true);
    setWin(false);
    setTimer(0);
    setIsInitial(false);

    setTenzies(setDiceData());
  }

  function rollDice() {
    if (!win) {
      setRollCount((prevRollCount) => prevRollCount + 1);

      setTenzies((prevTenzies) =>
        prevTenzies.map((item) => {
          return item.selected
            ? item
            : { ...item, defaultNum: getRandomNumber(), selected: false };
        })
      );
    } else {
      setRollCount(0);
      setTenzies(setDiceData());
    }
  }

  // function toggleDice(id) {
  //   if(!isGameStart) {
  //     return;
  //   }

  //   setTenzies((prevTenzies) =>
  //     prevTenzies.map((item) => {
  //       return item.id === id ? { ...item, selected: !item.selected } : item;
  //     })
  //   );
  // }

  const toggleDice = useCallback((e) => {
    console.log(isGameStart);
    if(!isGameStart) {
      return;
    }

    let id = e.target.getAttribute("data-id");

    setTenzies((prevTenzies) =>
      prevTenzies.map((item) => {
        return item.id === id ? { ...item, selected: !item.selected } : item;
      })
    );
  }, [isGameStart]);

  const tenzieItems = tenzies.map((item) => {
    return (
      <Dice
        key={item.id}
        id={item.id}
        diceNumber={item.defaultNum}
        toggle={toggleDice}
        selected={item.selected}
      />
    );
  });
  
  let buttonElement;

  if(!isGameStart) {
    if(win) {
      buttonElement = <button onClick={gameStart}>Play Again</button>;
    } else {
      buttonElement = <button onClick={gameStart}>Start Game</button>;
    }
  } else {
    buttonElement = <button onClick={rollDice}>Roll Dice</button>;
  }

  return (
    <div className="wrapper">
      {win && <Confetti />}
      <div className="title">
        <h1>Tenzies</h1>
        <h3>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>
      </div>

      <div className="inner-wrap">
        <div className="count-details">
          <span>Roll count: {rollCount}</span>
          <span>Timer: {timer > 0 ? `${timer} seconds` : "N/A"}</span>
        </div>

        <div className="dice-container">{tenzieItems}</div>
      </div>

      <div className="dice-container--roll">
        {buttonElement}
      </div>
    </div>
  );
}

export default App;
