import React, { useContext } from 'react'
import '../components/ItemBoard.css'
import { gameContext } from '../context/gameContext'


const BoardItem = () => {
    // const { clickValue } = props
    const {items,clickValue,winner}  = useContext(gameContext)
    console.log(items)

    return (
        <div className='Board'>
            {items.map((index, id) => <button key={id} className={index === 'x' ? 'item x' : index === 'o' ? 'item y' : 'item'} onClick={() => items !== null && winner !== 'x' && winner !== 'o' && clickValue(id)}>{index}</button>)}
        </div>
    )
}

export default BoardItem