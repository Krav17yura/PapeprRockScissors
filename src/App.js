import React, {useState, useEffect} from 'react'
import './App.css';
import {Rock, Paper, Scissors} from './icons'
import Header from "./components/header";
import Choice from "./components/coices";
import Modal from "./components/modal";

const choices = [
    {id: 1, name: 'rock', component: Rock, losesTo: 2},
    {id: 2, name: 'paper', component: Paper, losesTo: 3},
    {id: 3, name: 'scissors', component: Scissors, losesTo: 1}
]

function App() {
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [gameState, setGameState] = useState(null)


    useEffect(() => {
        restartGame()
    }, [])


    const restartGame = () => {
        setGameState(null)
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }


    const handleUserChoice = (choice) => {
        const chosenChoice = choices.find(item => item.id === choice)
        setUserChoice(chosenChoice)

        if (chosenChoice.losesTo === computerChoice.id) {
            setLosses(losses + 1)
            setGameState('lose')
        } else if (computerChoice.losesTo === chosenChoice.id) {
            setWins(wins + 1)
            setGameState('win')
        } else if (computerChoice.id === chosenChoice.id) {
            setGameState('draw')
        }
    }

    return (
        <div className="app">
            <Header
                wins={wins}
                losses={losses}
            />
            <Modal
                gameState={gameState}
                restartGame={restartGame}
                userChoice={userChoice}
                computerChoice={computerChoice}
            />
            <Choice handleUserChoice={handleUserChoice}/>
        </div>
    );
}

export default App;
