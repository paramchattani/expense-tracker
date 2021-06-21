import './App.css';
import Header from  './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TranactionList'
import AddTransaction from './components/AddTransaction'
import React,{useReducer,useContext} from 'react'
const Appreducer=(state,action)=>
{
  switch(action.type)
  {
  case 'DELETE_TRANSACTION':
    return{
      ...state,
      transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
    }
    case 'ADD_TRANSACTION':
      return{
        ...state,
        transactions:[action.payload,...state.transactions]
      }
    default:return state
  }
}
const initialState=
{
  transactions:[
    {id:1,text:"flower",amt:-20},
    {id:2,text:"salary",amt:300},
    {id:3,text:"books",amt:-10} 
  ]
}
export const GlobalContext=React.createContext()
function App() {
  const [state,dispatch]=useReducer(Appreducer,initialState)
  return (
    <GlobalContext.Provider value={{allTransation:state.transactions,transactionDispatch:dispatch}}>
  
<Header/>
<div className="container">
  <Balance/>
 
<IncomeExpense/>
<TransactionList/>
<AddTransaction/>

</div>
 </GlobalContext.Provider>
  );
}

export default App;
