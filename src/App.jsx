import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/FinanceDashboard'
import FinanceDashboard from './components/FinanceDashboard'

function App() {
  // const [count, setCount] = useState(0)

  return(

    <div className="Overall">
    <h1>Finance Dashboard</h1>
    <FinanceDashboard />
    </div>

  )
  
}

export default App
