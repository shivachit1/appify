import React from "react"
import { useDispatch } from "react-redux";

import { search } from "../redux/actions/ui"

import "./index.css"

export const SearchBar = () => {

    const dispatch = useDispatch();

  return (
    <div className="search_bar">
        <input placeholder="Search here" onChange={e => dispatch(search(e.target.value))}/>
    </div>
  )
}