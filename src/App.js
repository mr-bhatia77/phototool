import './App.css';
import React, { useReducer } from 'react'
import ImagesContainer from './components/ImagesContainer';
import TableComponent from './components/TableComponent';
import Nav from './components/Nav';

export const compareContext = React.createContext()

const initialState = [];
const reducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'compare':
      console.log(action.payload)
      return [...state,action.payload]
    case 'remove':
      let newState=state.filter((i)=>i.id!==action.payload)
      return newState
    default:
      return state
  }
}
function App() {
  const [tableState, dispatch] = useReducer(reducer, initialState)
  return (
    <compareContext.Provider
     value={{tableState:tableState,tableDispatch:dispatch}}>
      <div className="App">
        <Nav></Nav>
        <h3>Images Today</h3> 
        <ImagesContainer></ImagesContainer>
        <TableComponent></TableComponent>
      </div>
    </compareContext.Provider>
  );
}

export default App;
