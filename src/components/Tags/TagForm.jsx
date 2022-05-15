import React, { useContext, useState } from "react"
import { postTag } from "../../actions/TagActions/tagActions"
import { Store } from '../../state/StoreProvider';


const TagForm = ({ noteId }) => { 

  const { dispatch } = useContext(Store)

  const [categoryTag, setTag] = useState('')

  const addingTag = (e) => {
    setTag(e.target.value)
  }

  const addTag = async (e) => {
    e.preventDefault()
    if(categoryTag){
    const tagToSend = {
      categoryTag,
      noteId: noteId
    }
    
    const response = await postTag(tagToSend)
    const action = {
      type: 'create-note-tag',
      payload: response
    }

    dispatch(action)
    setTag('')    
    }
  }
  
  
  

  return (
    <form className='card col-6 p-2'>
      <label htmlFor="tag">Add Tag: </label>
        <input className="form-control mb-2" onChange={addingTag} type="text" name="tag" value={categoryTag} />
        <button className="btn btn-primary" onClick={addTag} >Add Tag</button>
    </form>
  )
}

export default TagForm
