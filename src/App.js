import React, { useReducer } from 'react'
import './App.css'

import reducer, { initialState } from './reducers'
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  setMemory,
  addMemory,
  clearMemory,z
} from './actions'

import TotalDisplay from './components/TotalDisplay'
import CalcButton from './components/CalcButton'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAddOneClick = () => {
  //   dispatch(addOne(1))
  // }
  const handleApplyNumberClick = (e) => {
    dispatch(applyNumber(Number(e.target.innerText)))
  }

  const handleChangeOperationClick = (e) => {
    dispatch(changeOperation(e.target.innerText))
  }

  const handleClearDisplayClick = () => {
    dispatch(clearDisplay())
  }

  const handleSetMemory = () => {
    dispatch(setMemory())
  }
  const handleAddMemory = () => {
    dispatch(addMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={'M+'} onClick={handleSetMemory}/>
              <CalcButton value={'MR'} onClick={handleAddMemory}/>
              <CalcButton value={'MC'} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumberClick} />
              <CalcButton value={2} onClick={handleApplyNumberClick} />
              <CalcButton value={3} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumberClick} />
              <CalcButton value={5} onClick={handleApplyNumberClick} />
              <CalcButton value={6} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumberClick} />
              <CalcButton value={8} onClick={handleApplyNumberClick} />
              <CalcButton value={9} onClick={handleApplyNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={'+'} onClick={handleChangeOperationClick} />
              <CalcButton value={'*'} onClick={handleChangeOperationClick} />
              <CalcButton value={'-'} onClick={handleChangeOperationClick} />
            </div>

            <div className="row ce_button">
              <CalcButton value={'CE'} onClick={handleClearDisplayClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
