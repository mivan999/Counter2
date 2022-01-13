import React, {useEffect, useState} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
type propsType={
   setValue:()=>void
    editVal:(s:boolean)=>void
    callBackError:(error:string)=>void
}
const Settings = (props:propsType) => {
    const [max, setMax] = useState(5);
    const [start, setStart] = useState(0);
    const [error, setError] = useState("");
    const [disabledStatus, setDisabledStatus] = useState(false);
    useEffect(()=>{
        if(max<=start||start<0){
            setError("incorrect value")
            props.callBackError(error)
            setDisabledStatus(true)
            console.log(error)
        }
        else{
           setError("")
            props.callBackError("")
            setDisabledStatus(false)
        }
    },[max,start])
    useEffect(()=>{
        let startVal = localStorage.getItem('valStart')
        if (startVal) {
            let newValStart = JSON.parse(startVal)
            setStart(newValStart)
        }
        let maxVal = localStorage.getItem('valMax')
        if (maxVal) {
            let newValMax = JSON.parse(maxVal)
            setMax(newValMax)
        }
    },[])
    const callBackHandler = () => {
        console.log("set count=",start)
        localStorage.setItem("valMax",JSON.stringify(max))
        localStorage.setItem("valStart",JSON.stringify(start))
        props.setValue()
        editStatus(false)
        setStart(start)
    }
    const editStatus = (s:boolean) => {
      props.editVal(s)
    }
    const onClickDownHandlerMax = () => {
        setMax(max-1)
        editStatus(true)
    }
    const onClickUpHandlerMax = () => {
        setMax(max+1)
        editStatus(true)
    }
    const onClickDownHandlerStart = () => {
        setStart(start-1)
        editStatus(true)
    }
    const onClickUpHandlerStart = () => {
        setStart(start+1)
        editStatus(true)
    }

    return (
        <div className={s.set}>
            <InputNumber error={error} value={max} onClickUp={onClickUpHandlerMax} onClickDown={onClickDownHandlerMax}/>
            <InputNumber error={error} value={start}  onClickUp={onClickUpHandlerStart} onClickDown={onClickDownHandlerStart}/>
            {/*<input step={alert(123)} type={'number'} value={max} onBlur={(e)=>onBlurHandlerMax(e)} />*/}
            {/*<input type={'number'} value={start} onBlur={(e) => onBlurHandlerStart(e)}/>*/}
           {/*<span> <Count value={max} />max value</span>*/}
           {/*<span> <Count value={start} />start value</span>*/}
            <Button name={"Set"} disabled={disabledStatus} callback={callBackHandler}/>


        </div>
    );
};

export default Settings;