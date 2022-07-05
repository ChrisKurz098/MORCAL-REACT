import { useState } from "react";
const Input = ({ inputState, setInputState }) => {

    const updateInputs = (event) => {
        setInputState(old => ({ ...old, [event.target.id]: parseFloat(event.target.value) }));
    };

    return (
        <div id="inputDiv">
            <div className="inputContainer">
                <label className="inputLabel" htmlFor={"apr"}>Input Fixed APR (%) </label>
                <br />
               <span><input type={"number"} id="apr" step={".01"} defaultValue={inputState.apr} onChange={updateInputs} /> %</span>
            </div>

            <div className="inputContainer">
                <label className="inputLabel" htmlFor={"debt"}>Total Home Price </label>
                <br />
                <span>$ <input type={"number"} id="debt" defaultValue={inputState.debt} onChange={updateInputs} /></span>
            </div>

            <div className="inputContainer">
                <label className="inputLabel" htmlFor={"down"}>Down Payment (%) </label>
                <br />
                <span>$ <input type={"number"} id="down" step={".1"} defaultValue={inputState.down} onChange={updateInputs} /></span>
            </div>

            <div className="inputContainer">
                <label className="inputLabel" htmlFor={"years"}>Fixed Loan Terms (yrs) </label>
                <br />
                <span><input type={"number"} id="years" max={30} min={1} defaultValue={inputState.years} onChange={updateInputs} /></span>
            </div>
        </div>
    )
}

export default Input;
