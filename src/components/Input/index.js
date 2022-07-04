import {useState} from "react";
const Input = ({inputState, setInputState}) => {
  
   const updateInputs = (event) => {
    setInputState(old =>  ({...old, [event.target.id]: event.target.value}));
   }
   console.log(inputState)
    return (
        <>
            <label htmlFor={"apr"}>Input Fixed APR (1%=.01): </label>
            <br/>
            <input type={"number"} id="apr" step={".0001"} defaultValue={inputState.apr} onChange={updateInputs}/>
            <br/>
            <label htmlFor={"debt"}>Total Debt: </label>
            <br/>
            <input type={"number"} id="debt" defaultValue={inputState.debt} onChange={updateInputs}/>
            <br/>
            <label htmlFor={"down"}>Down Payment: </label>
            <br/>
            <input type={"number"} id="down" defaultValue={inputState.down} onChange={updateInputs}/>
            <br/>
            <label htmlFor={"years"}>Years to Pay Off: </label>
            <br/>
            <input type={"number"} id="years" defaultValue={inputState.years} onChange={updateInputs}/>
        </>
    )
}

export default Input;
