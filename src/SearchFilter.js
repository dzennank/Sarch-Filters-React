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

    const HandleSearch = (event) => {
        if(event.target.value === "") {
            setFilterList(list);
            
        }

        const filteredValues = list.filter(
            (item) => item.indexOf(event.target.value) !== -1
        )
        setFilterList(filteredValues);
    }
    
  return (
    <div style={{display:'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    gap: '20px', 
    height: '100vh', }}>
        <form>
        <label>Search Fruits</label><br />
        <input name='search' type='text' onChange={HandleSearch}/>
        </form>
    </div>
  )
}

export default SearchFilter