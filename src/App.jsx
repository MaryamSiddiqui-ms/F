import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      
      <h1>zkVML</h1>
      <h2>
      Zero-Knowledge Validating Machine Learning Model
      </h2>
      <div className="card">
      <button>
          Input data 
        </button>
        <button>
          Generate Proof
        </button>
        <button>
          Verify
        </button>
      
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
       Click on logo to view the documentation
      </p>
    </>
  )
}

export default App
