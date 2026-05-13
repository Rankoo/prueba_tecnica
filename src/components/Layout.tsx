import type React from "react"
import { NavLink, Outlet } from "react-router"

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/checkout'>Checkout</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
