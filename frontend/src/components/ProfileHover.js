import React from "react"

import './index.css'
import { Link } from "react-router-dom"

export const ProfileHover = () => {
  return (
    <div className="dropdown_menu">
      <Link
        to={"/profile"}
        className="dropdown_menuItem"
      >
        My Profile
      </Link>
      <button
        className="dropdown_menuItem"
      >
        My Orders
      </button>
      <button
        className="dropdown_menuItem"
      >
        My Payment
      </button>
      <button className="sign-out">
        Sign Out
      </button>
    </div>
  )
}