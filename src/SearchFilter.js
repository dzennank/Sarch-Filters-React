import React from 'react'
import { useState } from 'react'
import './SearchFilter.css'

const list = [
    "Banana",
    "Apple",
    "Orange",
    "Peach",
    "Mango",
    "Watermalon"

]

const SearchFilter = () => {

    const [filterList, setFilterList] = useState(list)
    
  return (
    <div style={{display:'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    gap: '20px', 
    height: '100vh', }}>
        <form>
        <label>Search Fruits</label><br />
        <input name='search' type='text'/>
        </form>
    </div>
  )
}

export default SearchFilter