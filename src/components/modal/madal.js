import React from 'react'
import {Rock, Paper, Scissors} from '../../icons'

const Modal = ({gameState, restartGame, userChoice, computerChoice}) => {

    const renderComponent = (choice) => {
        const Component = choice.component
        return <Component/>
    }
    return (
        <>
            {gameState &&
            <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
                <div>
                    <div className="game-state-content">
                        <p>{renderComponent(userChoice)}</p>
                        <p>{gameState === "draw" ? "drew" : `you ${gameState}`}</p>
                        <p>{renderComponent(computerChoice)}</p>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Modal