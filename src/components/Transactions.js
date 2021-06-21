import React,{useContext} from 'react'
import {GlobalContext} from '../App'
function Transactions({transactions}) {
    const dispatching=useContext(GlobalContext)
    
    const sign=transactions.amt<0?'-':'+'
    return (
        <li className={transactions.amt<0?'minus':'plus'}>
            
            {transactions.text}
            <span>
                {sign}
                {Math.abs(transactions.amt)}
            </span>
            <button onClick={()=>dispatching.transactionDispatch({
            type:'DELETE_TRANSACTION',
            payload:transactions.id
            })}>x</button>
            </li>
    )
}

export default Transactions
