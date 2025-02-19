import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { AuthLayout } from '../components/layout/AuthLayout'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export const AppRouters = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Eample layout */}
      {/*  
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
    </Routes>
  )
}
