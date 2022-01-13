import React, {useEffect, useState} from 'react';

import './App.css';
import Scoreboard from './Component/Scoreboard/Scoreboard';
import Settings from './Component/Settings/Settings';
import {Simulate} from 'react-dom/test-utils';
// import error = Simulate.error;


function App() {

    console.log("render App")
    const [max, setMax] = useState(10000);
    const [start, setStart] = useState(0);
    const [error,setError ] = useState("");
    const [editStatus,setEditStatus ] = useState(false);
    useEffect(()=>{

    },[start])

    const setValueHandler = () => {
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


    }
    const editVal = (s:boolean) => {
      setEditStatus(s)
    }
    const errorHandler = (er:string) => {
      setError(er)
    }
    return (
        <div className="App">
            <Scoreboard
                name={'sb'}
                countName={'count2'}
                nameBtn1={'inc'}
                nameBtn2={'reset'}
                statusCount={'default'}
                max={max}
                start={start}
                editStatus={editStatus}
                error={error}
            />
            <Settings
                callBackError={(er)=>errorHandler(er)}
                editVal={editVal}
                setValue={setValueHandler} //set start, max onClickUp/Down
            />
        </div>
    );
}

export default App;
