import React from 'react'
import SearchBar from './SearchBar'

const Nav = ( { setSearchQuery }) => {
  return (
    <nav>
        <h2>WhatTheTech!</h2>
        <SearchBar setSearchQuery={setSearchQuery} />
    </nav>
  )
}

export default Nav