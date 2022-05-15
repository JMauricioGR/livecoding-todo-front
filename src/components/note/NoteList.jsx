import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const NoteList = ({notes, id}) => {
  return (
    <div className='card m-5 p-2' >
      <NoteForm id={id}/>
      {notes.map(note => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList
