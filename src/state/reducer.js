const reducer = (state, action) => {
  switch(action.type){
    case 'get-categories':
      const newStateWithAllCategories = {...state, categoryList: action.payload}
      return newStateWithAllCategories
    case 'create-category':
      const previousCategoyList = [...state.categoryList, action.payload]
      const newStateWithCategoryAdded = {...state, categoryList: previousCategoyList}
      return newStateWithCategoryAdded
    case 'deleteCategory':
      const newListWithoutCategory = state.categoryList.filter(category => category.id !== action.payload)
      const newStateWithoutCategory = {...state, 
      categoryList: newListWithoutCategory}
      return newStateWithoutCategory


    case 'add-note':
      const categoryToAddNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const categoryWithNoteAdded = {...categoryToAddNote,
      notes: [...categoryToAddNote.notes, action.payload]} 

      const newCategoryListWithNoteAdded = state.categoryList.map(category => category.id === action.payload.categoryId?categoryWithNoteAdded:category)

      const newStateWithNoteAdded = {...state,
      categoryList: newCategoryListWithNoteAdded}
      return newStateWithNoteAdded


    case 'delete-note':
      const categoryToDeleteNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithoutNote = categoryToDeleteNote.notes.filter(note => note.id !== action.payload.id)
      const categoryWithoutNote = {...categoryToDeleteNote,
      notes: listWithoutNote} 

      const newCategoryListWithoutNote = state.categoryList.map(category => category.id === categoryToDeleteNote.id?categoryWithoutNote:category)

      const newStateWithoutNote = {...state,
      categoryList: newCategoryListWithoutNote}
      return newStateWithoutNote
    case 'update-note':
      const categoryToUpdateNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithNoteUpdated = categoryToUpdateNote.notes.map(note => note.id === action.payload.id?action.payload:note)
      const categoryWithNoteUpdated = {...categoryToUpdateNote,
      notes: listWithNoteUpdated} 

      const newCategoryListWithNoteUpdated = state.categoryList.map(category => category.id === categoryToUpdateNote.id?categoryWithNoteUpdated:category)

      const newStateWithNoteUpdated = {...state,
      categoryList: newCategoryListWithNoteUpdated,
      note: {
        id: '',
        message: '',
        done: false,
        categoryId: ''
      }}
      return newStateWithNoteUpdated
    case 'add-note-to-be-updated':
      const newStateWithNoteToBeUpdated = {
        ...state,
        note: action.payload
      }
      return newStateWithNoteToBeUpdated
    case 'create-note-tag':
      const categoryWithNoteToUpdateTags = state.categoryList.find(category =>category.notes.find(note => note.id === action.payload.noteId))
      const noteWithTagToAdd = categoryWithNoteToUpdateTags.notes.find(noteTag => noteTag.id === action.payload.noteId)
      console.log(`Note with tag to Add`);
      console.log(noteWithTagToAdd);
      const noteUpdatedTags = {...noteWithTagToAdd, categoryTagDto: [...noteWithTagToAdd.categoryTagDto, action.payload] }
      const newListOfNotes = categoryWithNoteToUpdateTags.notes.map(noteItem => noteItem.id === action.payload.noteId?noteUpdatedTags:noteItem)
      const newCategoryWithTagsUpdatedInNotes = {...categoryWithNoteToUpdateTags, notes: newListOfNotes}
      const newCategoryList = state.categoryList.map(category => category.id === noteUpdatedTags.categoryId?newCategoryWithTagsUpdatedInNotes:category)
      const newState = {...state, categoryList: newCategoryList}
      return newState
  }
}

export default reducer
