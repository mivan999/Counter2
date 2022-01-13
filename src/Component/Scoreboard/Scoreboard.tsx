import React, {useEffect, useState} from 'react'
import Count from '../Count/Count';
import Button from '../Button/Button';
import s from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    name?: string
    countName?: string
    nameBtn1: string
    nameBtn2: string
    statusCount: 'default' | 'maxLimit'
    max: number
    start: number
    editStatus: boolean
    error: string
}

const Scoreboard = (props: ScoreboardPropsType) => {
    const startCount = props.start
    const endCount = props.max

    const [count, setCount] = useState<number>(startCount);
    const [statusCount, setStatusCount] = useState<'default' | 'maxLimit'>(props.statusCount);

    useEffect(() => {
        let startVal = localStorage.getItem('valStart')
        if (startVal) {
            let newValStart = JSON.parse(startVal)
            setCount(newValStart)
        }
        setCount(count)

    }, [count])
    console.log('countScore=', count)
    const incrementCount = () => {
        if (count < endCount) {
            setCount(count + 1)
        }
        if (count > endCount - 2) {
            setStatusCount('maxLimit')
        }
    }
    const resetCount = () => {
       // function localstorageFun(){
       //     let startVal = localStorage.getItem('valStart')
       //     if (startVal) {
       //         let newValStart = JSON.parse(startVal)
       //         return newValStart
       // }
        setCount(startCount)
        setStatusCount('default')
        console.log('reset')
    }

    return (
        <div className={statusCount == 'default' ? s.def : s.lim}>
            {props.editStatus
                ? props.error?
                    <div className={s.message}>
                        <h3>{props.error}</h3>
                    </div>
                : <div className={s.message}>
                    <h3>Enter value and press set</h3>
                </div>
                : <Count
                    countName={props.countName}
                    value={count}
                    status={statusCount}
                />}
            <div>
                <Button name={props.nameBtn1} callback={incrementCount}
                        disabled={props.editStatus || statusCount !== 'default'}/>
                <Button name={props.nameBtn2} callback={resetCount} disabled={props.editStatus || count == startCount}/>
            </div>


        </div>)
}
export default Scoreboard