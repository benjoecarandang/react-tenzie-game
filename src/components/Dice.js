import React, { Fragment } from "react";

function Dice(props) {
  function getDiceFace(id) {
    const style = {
      backgroundColor: props.selected ? "#fff" : "#e7e7e7",
    };

    return (
      <Fragment>
        {id === 1 && (
          <div data-id={props.id} className="first-face" style={style}>
            <span className="pip"></span>
          </div>
        )}

        {id === 2 && (
          <div data-id={props.id} className="second-face" style={style}>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        )}

        {id === 3 && (
          <div data-id={props.id} className="third-face" style={style}>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        )}

        {id === 4 && (
          <div data-id={props.id} className="fourth-face" style={style}>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        )}

        {id === 5 && (
          <div data-id={props.id} className="fifth-face" style={style}>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        )}

        {id === 6 && (
          <div data-id={props.id} className="sixth-face" style={style}>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  return (
    <div className="dice-container--child" onClick={props.toggle}>
      {getDiceFace(props.diceNumber)}
    </div>
  );
}

export default React.memo(Dice);
