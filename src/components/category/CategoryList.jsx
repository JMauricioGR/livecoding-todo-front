import React, { useContext, useEffect, useState } from 'react'
import { getAllCategories } from '../../actions/categoryActions/categoryActions'
import { Store } from '../../state/StoreProvider'
import Category from './Category'
import CategoryForm from './CategoryForm'

const CategoryList = () => {

  const {state, dispatch} = useContext(Store)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    getAllCategories().then(categories => {
      const action = {
        type: 'get-categories',
        payload: categories
      }
      dispatch(action)
    })
  }, [])

  const searchByTags = (e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <h1>Hello from category list</h1>
      <CategoryForm />
      <label htmlFor="search">Search: </label>
      <input type="text" name="search" onChange={searchByTags} />
      {/* {console.log(state.categoryList.map(category=> category.notes.map(notes => notes.categoryTagDto.filter(tag => tag.categoryTag.includes(search)))))} */}
      {console.log(state.categoryList.map(category=> category.notes.map(notes => notes.categoryTagDto.filter(tag => tag.categoryTag.includes(search)))))}
      {state.categoryList.map(category => <Category key={category.id}category={category} />)}
    </div>
  )
}

export default CategoryList
