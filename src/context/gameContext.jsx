import {createContext } from "react";
import { useState,useEffect } from "react";


export const gameContext = createContext()
const GameContextCreator = (porps) => {
    const [items, setItems] = useState(Array(9).fill(''))
    const [inputValue, setinputValue] = useState(false)
    const [winner, setWinner] = useState(undefined)

    const winner_Score = [
        [3, 4, 5],
        [0, 1, 2],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    useEffect(() => {
        winner &&
            setTimeout(() => {
                setItems(Array(9).fill(''))
                setinputValue(false)
                setWinner(undefined)
                // setWinner(undefined)
            }, 5000)

    }, [winner])


    // console.log(winner)
    const winnerCheckFun = (arr) => {
        return winner_Score.reduce((prev, [a, b, c]) => {
            if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
                prev = arr[b];
                setWinner(prev)
            }
            return prev
        }, '')
    }

    const clickValue = (id) => {
        if (items[id] !== "") return;
        const addValue = items.map((index, indexId) => id === indexId ? (inputValue !== true ? 'o' : 'x') : index)
        // if (winner === 'x' || winner === 'o') return
        winnerCheckFun(addValue)
        setinputValue(!inputValue)
        return setItems(addValue)
    }

    // const resetButton = () => {
    //     setItems(Array(9).fill(''))
    //     setWinner(undefined)
    // }
    const value ={
        items,
        winner,
        clickValue,
        setItems
    }
    console.log(winner)

    return <gameContext.Provider value ={value}>
        {porps.children}
    </gameContext.Provider>

}
export default GameContextCreator;

