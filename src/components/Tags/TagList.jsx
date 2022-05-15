import React from 'react'
import Tag from './Tag'

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map(noteItem => <Tag key={noteItem.id}  tag={noteItem.categoryTag} />)}
    </div>
  )
}

export default TagList
