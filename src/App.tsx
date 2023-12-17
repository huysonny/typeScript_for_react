import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video5 from './examples/Video5'
import Video7 from './examples/Video7'
import Video9 from './examples/Video9'
import Video10 from './examples/Video10/Video10'
import Video13 from './examples/Video13'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {/* <Video5
          name="Thanh Huy"
        /> */}
        {/* <Video7 /> */}
        {/* <Video9 /> */}
        <Video10
          defaultAge={20}
          defautName='thanh huy'
        />
        {/* <Video13
        // age={25}
        // name={'Thanh Huy'}
        // address={'HaNoi'}
        /> */}
      </p>
    </div>
  )
}

export default App
