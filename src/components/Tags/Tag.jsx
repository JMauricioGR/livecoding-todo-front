import React from 'react'

const Tag = ({tag}) => {

  const deleteTag = (id) => {
    
    const response = await deleteTag(id);
  }
  

  return (
    <span>
      <label htmlFor="">{tag.tag}</label>
      <button onClick={deleteTag}>X</button>
    </span>
  )
}

export default Tag
