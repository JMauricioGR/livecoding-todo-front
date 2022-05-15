import React, { useContext, useState } from "react"
import { postTag, deleteTag } from "../../actions/TagActions/tagActions"
import { Store } from '../../state/StoreProvider'

const TagForm = () => { 

  return (
    <form className='card col-4 p-2'>
      <label htmlFor="tag">Add Tag: </label>
        <input onChange={postTag} type="text" name="tag" />
    </form>
  )
}

export default TagForm
