import React, { useContext, useState } from 'react'
import { postCategory } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'

const CategoryForm = () => {

  const [title, setTitle] = useState('')

  const {dispatch} = useContext(Store)

  const addCategory = async (e)=>{
    e.preventDefault()
    if(title){
      const category = {
        title
      }
      const response = await postCategory(category)
      const action = {
        type: 'create-category',
        payload: response
      }
      dispatch(action)
      setTitle('')
    }
  }

  const addingTitle = (e)=>{
    setTitle(e.target.value)
  }

  

  return (
    <form>
      <label htmlFor="category">New Category: </label>
      <input className="form-control mb-1 col-6" onChange={addingTitle} type="text" name="category" value={title}/>
      <button className="btn btn-primary" onClick={addCategory}>Add category</button>
      
    </form>
  )
}

export default CategoryForm
