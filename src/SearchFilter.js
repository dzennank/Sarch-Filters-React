import React from 'react'
import { useState } from 'react'


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
        

        const filteredValues = list.filter(
            (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
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

        { filterList.map((item, index) => (
        <div key={index}>{item}</div>
    )
    )}

    </div>
    
  )
}

export default SearchFilter