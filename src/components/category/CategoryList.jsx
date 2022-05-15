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
    if(search.length > 0){
      const filterTags = state.categoryList.map(category => category.notes.map(notes => notes.categoryTagDto.filter(tag => tag.categoryTag.includes(search))))

      const findNotesFromFilterTags = state.categoryList.map(category => category.notes.map(note => note.categoryTagDto.map(tag => tag.categoryTag)))


         


      // const allNotesFromCategoryList = state.categoryList.map(
      //   category => {
      //     const newNotes={};
      //     category.notes.map(note => newNotes.add(note) )
      //     return notes
      //   }
      // )
      // const newNoteListFromFilterTags = allNotesFromCategoryList
      console.log('---------------  state.categoryList -----------------');
      console.log(state.categoryList);
      console.log('---------------  filterTags -----------------');
      console.log(filterTags);
      console.log('---------------  findNotesFromFilterTags -----------------');
      console.log(findNotesFromFilterTags);
    }
  }

  return (
    <div>
      <h1>To do App with Tags</h1>
      <CategoryForm />
      <label htmlFor="search">Search: </label>
      <input className="form-control mb-5 col-6" type="text" name="search" onChange={searchByTags} />
      {state.categoryList.map(category => <Category key={category.id}category={category} search={search} />)}
    </div>
  )
}

export default CategoryList
