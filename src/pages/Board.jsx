import React, { useContext } from 'react'
import BoardItem from '../components/BoardItem'
import { gameContext } from '../context/gameContext'


const Board = () => {
   const {winner} = useContext(gameContext)
    return (
        <div>
            <h1>The Winner is {winner}</h1>
            <BoardItem/>
            {/* <button type='submit' onClick={resetButton}>Reset</button> */}

        </div>
    )
}

export default Board