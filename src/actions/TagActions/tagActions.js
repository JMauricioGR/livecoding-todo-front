const postTag = async (tag) => {
  const response = await fetch('http://localhost:8081/api/v1/save/categorytag',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tag)
  })
  const data = await response.json()
  return data 
}

const deleteTag = async (id) => {

  const response = await fetch(`http://localhost:8081/api/v1/delete/categorytag/${id}`,
  {
    method: 'DELETE'
})
  return response
}

export {postTag, deleteTag}