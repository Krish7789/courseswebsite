import React from 'react'

const Filter = (props) => {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory; // receiving props

function filterHandler(title){ // clicking on filter and changing the category
setCategory(title)
}

  return (
    <div className='filter'>
      {filterData.map((data)=>{
        return(
  <button
    className={`filterbutton
      ${category === data.title ?
      "bg-opacity-60 border-white":
      "bg-opacity-40 border-transparent"}
    `}
  
  key = {data.id} onClick={()=>filterHandler(data.title)}>
            {data.title} 
        </button>)
      })}
    </div>
  )
}

export default Filter
