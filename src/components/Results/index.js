import { useState } from "react";
import ResultsDisplay from "./ResultsDisplay";

const Results = ({ inputState }) => {

    const [results, setResults] = useState(
        Array.from({ length: inputState.years }, () => ([]))
    );
    const [selectState, setSelection] = useState({ year: 1, month: 1 });


    //----Start Calculation function ----//
    const calculate = () => {
        let newResults = Array.from({ length: inputState.years }, (__, i) => ([]));

        let { apr, debt, down, years } = inputState;
        if (years>30) years=30; 
        apr = apr/100;
        down= down/100;
        let remainingDebt = debt-(debt*down);

        const months = years * 12; //total number of months
        let totalInit = down;
        let princ = Math.ceil(remainingDebt / months); //constant, monthly principal payment
        let grandTotal = 0; //accumulated total payments

        for (let month = 1; month <= months; month++) { //while the currentmonth [month] does not equal the total number of months [months], do the loop (a 1 is added so that month 1 = 1 and not 0)
            if (month === months) { princ = remainingDebt }; //if its the last month make princ the total debt
         
            let year = Math.ceil(month / 12);    //Current year by taking current month [month] div by 12

            const intrest = Math.round((remainingDebt * apr / 12)); //calculate new intrest amount
            const payment = Math.ceil(intrest + princ);  //calculate total payment
            remainingDebt = remainingDebt-princ;   //calulate new debt by subtracting principal payment from debt
            grandTotal += payment //add payment to total paymnets

            //save results to temp state
            newResults[year - 1].push({
                year: year,
                month: month,
                intrest: intrest,
                principal: princ,
                totalPayment: payment,
                remainingDebt: remainingDebt,
                totalMonths: months,
                grandTotal: grandTotal
            });

            //prepar for next loop
            totalInit = Math.round(totalInit + payment)
           setSelection(old => ({year: 1, month: 1}));
          
        }
        //update results state with new results
        setResults(newResults);
    };
    //------End Calulation Function----//

    const handleSelection = (event) => {
        const val = event.target.value;
        switch (event.target.id) {
            case "chMonth": setSelection(old => ({ year: old.year, month: val }))
                break;
            case "chYear": setSelection(old => ({ year: val, month: old.month }));
                break;
            default:
        }

    }


    return (
        <div id="resultsDiv">
            <button onClick={calculate} >CALCULATE</button>
            <br />
            <label htmlFor="chYear">Choose a Year: </label>
            <select name="Year" id="chYear" onChange={handleSelection}>
                {results.map((e, i) => (<option key={i} value={i + 1}>{i + 1} </option>))};
            </select>
            <br />
            <label htmlFor="chMonth">Choose a Month: </label>
            <select name="Month" id="chMonth" onChange={handleSelection}>
                {results[selectState.year - 1].map((e, i) => (<option key={i} value={i + 1}>{i + 1} </option>))};
            </select>
         <ResultsDisplay selectState = {selectState} results = {results}/>
        </div>
    )
};

export default Results;