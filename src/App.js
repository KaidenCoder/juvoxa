import './App.css';
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from "react-router-dom"
import TableComponent from './components/Tables/TableComponent';
import { URL, COLUMNS } from './utils/columns'
import { URLTWO, COLUMNSTWO } from './utils/columns2'
import { Danger, Light, Primary } from './components/Button/Button.stories';

function App() {
  const [data, setData] = useState([])

  // Holdings API
  useEffect(() => {
    const fetchApi = async () => {
      fetch(URL)
        .then(res => res.json())
        .then(d => setData(d.payload))
    }
    fetchApi()
  }, [])

  // Transactions API
  const [data2, setData2] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      fetch(URLTWO)
        .then(res => res.json())
        .then(d => setData2(d.transactions))
    }
    fetchApi()
  }, [])

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Primary name="Table Database" />
        <div style={{ marginTop: '3em', display: 'flex' }}>
          <Link to="/"><Danger name="Holdings" /></Link>
          <Link to="/transactions"><Light name="Transactions" /></Link>
        </div>
      </div>
      <hr />

      <Switch>
        <Route exact path="/">
          <TableComponent
            url={data}
            columns={COLUMNS}
          />
        </Route>
        <Route exact path="/transactions">
          <TableComponent
            url={data2}
            columns={COLUMNSTWO}
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;



