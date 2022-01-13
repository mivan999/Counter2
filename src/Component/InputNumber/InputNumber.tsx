import React from 'react';
import s from './InputNumber.module.css';
type propsType={
    value:number
    onClickUp:()=>void
    onClickDown:()=>void
    error:string
}
const InputNumber = (props:propsType) => {
    return (
        <div >
            <input className={props.error? s.error:""} value={props.value} type="text"/>
            <button onClick={props.onClickUp}>+</button>
            <button onClick={props.onClickDown}>-</button>
        </div>
    );
};

export default InputNumber;