const postNote = async (note) => {
  const response = await fetch(`http://localhost:8081/api/v1/save/note`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  const data = await response.json()
  return data
}

const deleteNote= async (id) => {
  const response = await fetch(`http://localhost:8081/api/v1/delete/note/${id}`,
  {
    method: 'DELETE'
  })

  return response
}

const putNote = async (note) => {
  const response = await fetch(`http://localhost:8081/api/v1/update/note`,
  {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  const data = await response.json()
  return data
}

export {postNote, deleteNote, putNote}