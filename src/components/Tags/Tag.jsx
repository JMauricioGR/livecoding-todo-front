import React from 'react'

const Tag = (tag) => {

  const deleteTag = async(id) => {
    

    const response = await deleteTag(id);
  }
  
  
  return (
    <span className="m-2">
      <label htmlFor="">#{tag.tag}</label>
      <button onClick={() => deleteTag(tag.id)}>X</button>
    </span>
  )
}

export default Tag
