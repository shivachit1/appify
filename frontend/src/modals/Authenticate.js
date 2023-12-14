import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";

import { changeModalPage } from "../redux/actions/ui"

export const AuthenticateModal = () => {
  const disPatch = useDispatch()
  const navigate = useNavigate();
  const {orderId} = useParams();

  const [code, setCode] = useState()

  const authenticateEmployee = (e) => {
    e.preventDefault()
    //disPatch(loginUser(user))
    // if employee is authenticated

    navigate("/orders/" + orderId + "/sellerView");
  }

  return (
    <div className="container">
      <div
        className="container__backdrop"
        onClick={() => disPatch(changeModalPage("none"))}
      ></div>
      <div className="container__signin">
      <form onSubmit={(e) => authenticateEmployee(e)}>
      <h3>Order pick up : {orderId}</h3>
        <h3>Enter your employee code</h3>
          <input
            type="password"
            name="password"
            value={code}
            placeholder="employee code"
            onChange={(e) => setCode(e.target.value)}/>
          <button type="submit">Ok</button>
        </form>
      </div>
    </div>
  )
}