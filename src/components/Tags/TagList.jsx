import React from 'react'
import Tag from './Tag'

const TagList = (tags) => {
  
  return (
    <div>
      {tags.tags.map(tagItem => <Tag key={tagItem.id} tag={tagItem.categoryTag} />)}
    </div>
  )
}

export default TagList
