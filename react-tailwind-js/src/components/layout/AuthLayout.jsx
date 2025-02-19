import React from 'react'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div className="">
      <h2>Login Layout</h2>
      <h2>Logo</h2>
      <Outlet />
    </div>
  )
}
