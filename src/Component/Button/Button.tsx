import React from 'react'
import s from "./Button.module.css"
export type ButtonPropsType={
    name:string
    disabled:boolean
    callback:()=>void
}
const Button = (props:ButtonPropsType) => {

    return (
        <div>
            <button
                className={s.button}
                onClick={props.callback}
                disabled={props.disabled}
            >
                {props.name}

            </button>
        </div>)
}
export default Button