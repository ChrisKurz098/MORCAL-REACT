const ResultsDisplay = ({ selectState, results }) => {
    if (results[0].hasOwnProperty(0)) {
        let { year, month } = selectState;
        year--;
        month--;
        return (
            <div id="resultsDisplayDiv" style={{"whiteSpace": "pre-line"}} >
                {
                    `
Total Payment: $${results[year][month].totalPayment}
Year: ${results[year][month].year}  
Month: ${results[year][month].month}  
Intrest: $${results[year][month].intrest}
Principal: $${results[year][month].principal}
Remaining Debt: $${results[year][month].remainingDebt}
Total Months: ${results[year][month].totalMonths}
Grand Total: $${results[year][month].grandTotal}
`
                }
            </div>
        )
    };
    return (<>Press Calculate</>)
}

export default ResultsDisplay;