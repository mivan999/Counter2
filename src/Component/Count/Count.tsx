import React, {useEffect} from 'react'
import s from './Count.module.css'
export type CountPropsType={
    countName?:string
    value:number
    status?:"default"|"maxLimit"

}
const Count = (props:CountPropsType) => {

    return (
        <div className={props.status=="maxLimit"?s.limit:s.def}>
            <h2>{props.value}</h2>
        </div>)
}
export default Count;