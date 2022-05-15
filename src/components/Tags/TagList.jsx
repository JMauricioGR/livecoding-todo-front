import React from 'react'
import Tag from './Tag'

const TagList = ({tags}) => {
  
  return (
    <div>
      {tags.map(tagItem => <Tag key={tagItem.id} tag={tagItem} />)}
    </div>
  )
}

export default TagList
