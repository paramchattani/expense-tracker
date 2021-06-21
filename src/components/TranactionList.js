import React,{useContext} from 'react'
import {GlobalContext} from '../App'
import Transactions from './Transactions'
function TranactionList() {
    const context=useContext(GlobalContext)
    const {allTransation}=useContext(GlobalContext);
    //destructuring used 
    //tranactions is array
    //console.log(context)
    return (
        <div>
           <h3>History</h3>
           <ul>
{allTransation.map(transaction=><Transactions key ={transaction.id} transactions={transaction}/>)}
</ul>
        </div>
    )
}

export default TranactionList
