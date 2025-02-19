import { NavLink } from 'react-router'
import reactLogo from '../assets/react.svg'

export const Home = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center flex-col h-screen">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Vite + React + React Router</h1>
      <h3>Eslint, pretter and husky as pre-commit hook</h3>
      <div className="border border-amber-50 p-2 m-2 rounded-full">
        <NavLink to="/about" end>
          /About
        </NavLink>
      </div>
      <a
        href="https://github.com/"
        target="_blank"
        className="read-the-docs text-neon-cyan"
      >
        Click here to give a star on GitHub
      </a>
    </div>
  )
}
