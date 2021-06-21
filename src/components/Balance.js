import React,{useContext} from 'react'
import {GlobalContext} from '../App'
function Balance() {
    const {allTransation}=useContext(GlobalContext);
   const amount=allTransation.map(transaction=>transaction.amt)
   const total= amount.reduce((acc,item)=>(acc+=item))
    return (
        
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">Rs {total}</h1>
        </div>
    )
}

export default Balance
