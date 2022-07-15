import React from "react"

export default function Dice(props) {
    function getDiceFace(id) {
        const style = {
            backgroundColor: props.selected ? "#fff" : "#e7e7e7"
        }

        return (
            <span>
                {
                    id === 1 &&
                    <div className="first-face" style={style}>
                        <span className="pip"></span>
                    </div>
                }
                
                {
                    id === 2 &&
                    <div className="second-face" style={style}>
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>
                }

                {
                    id === 3 &&
                    <div className="third-face" style={style}>
                        <span className="pip"></span>
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>
                }

                {
                    id === 4 &&
                    <div className="fourth-face" style={style}>
                        <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                        </div>
                        <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                        </div>
                    </div>
                }

                {
                    id === 5 &&
                    <div className="fifth-face" style={style}>
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
                }


                {
                    id === 6 &&
                    <div className="sixth-face" style={style}>
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
                }

            </span>
        )
    }

    return (
        <div 
            className="dice-container--child"
            onClick={props.toggle}
        >
            {getDiceFace(props.diceNumber)}
        </div>
    )
}