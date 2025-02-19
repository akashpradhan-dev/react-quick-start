import { NavLink } from 'react-router'
import reactLogo from '../assets/react.svg'

export const Home = () => {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + React Router</h1>
      <h3>Eslint, pretter and husky as pre-commit hook</h3>
      <div className="card">
        {/* <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button> */}
        <NavLink to="/about" end>
          About
        </NavLink>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <a href="" className="read-the-docs">
        Click here to give a star on GitHub
      </a>
    </div>
  )
}
