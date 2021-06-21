import React,{useContext} from 'react'
import {GlobalContext} from '../App'
function IncomeExpense() {
    const {allTransation}=useContext(GlobalContext)
    const amts=allTransation.map(transaction=>transaction.amt)
    const income=amts.filter(item=>item>0).reduce((acc,item)=>(acc+=item))
    const expense=amts.filter(item=>item<0).reduce((acc,item)=>(acc+=item))
    return (
        <div className="incomeExpense">
            <div >
                <h4 id="Income">Income</h4>
                <p id="incomepara">+{income}</p>

            </div>
            <div >
                <h4 id="Expense">Expense</h4>
                <p id="expensepara">{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
