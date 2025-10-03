'use client'
import React, { useState } from 'react'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
  return (
    <input placeholder='Search' value={searchValue} onChange={(e) => {
        setSearchValue(e.target.value)
    }}/>
  )
}
