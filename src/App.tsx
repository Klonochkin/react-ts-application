import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)}}>
          count is {count}
        </button>
        <p>
          Измените <code>src/App.tsx</code> и сохраните для изменения
        </p>
      </div>
      <p className="read-the-docs">
        Нажми на кнопку для увеличения количества.. нажатий?
      </p>
    </>
  )
}

export default App
