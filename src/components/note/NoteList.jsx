import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const NoteList = ({notes, id, search}) => {


  const filterNotesByTag = (notesToFilter, searchText) => {
    

    const result = []
    for(let note of notesToFilter){
      for(let tag of note.categoryTagDto){
        if(tag.categoryTag.includes(searchText) ){
          console.log('----- note -----');
          console.log(note);          
          result.push(note)
        }
      }
    }
    console.log('----- result -----')
    console.log(result)
    return result    
  }
   
  filterNotesByTag(notes, search)
  return (
    <div className='card m-5 p-2' >
      <NoteForm id={id}/>
      {search===''?notes.map(note => <Note key={note.id} note={note}/>):filterNotesByTag(notes, search).map(note => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList
