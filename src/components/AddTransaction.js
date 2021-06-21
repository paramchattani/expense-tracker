import React,{useState,useContext} from 'react'
import {GlobalContext} from '../App'

function AddTransaction() {
    const dispatching=useContext(GlobalContext)
    const [text,setText]=useState('')
    const [amt,setAmt]=useState(0);
    const addsTransaction=(e)=>
    {
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amt:+amt
        }
        dispatching.transactionDispatch({
            type:'ADD_TRANSACTION',
            payload:newTransaction
        })
    }
    return (
        <div>
            <h3>add transaction </h3>
            <form onSubmit={(e)=>addsTransaction(e)}>
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={amt} onChange={(e)=>setAmt(e.target.value)}/>
                <button>Add transaction </button>
            </form>
            
        </div>
    )
}

export default AddTransaction
