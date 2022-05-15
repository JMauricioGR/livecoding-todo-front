import React, { useContext } from 'react'
import { deleteTag } from '../../actions/TagActions/tagActions';
import { Store } from '../../state/StoreProvider';

const Tag = ({tag}) => {

  const {dispatch} = useContext(Store)

  const actionDeleteTag = async(id) => {   

    const response = await deleteTag(id);
    if(response.status === 200){
      const action ={
        type: 'delete-note-tag',
        payload: tag
      }
      dispatch(action)
    }
  }
  
  return (
    <span className="m-2">
      <label htmlFor="">#{tag.categoryTag}</label>
      <button className="btn btn-primary" onClick={() => actionDeleteTag(tag.id)}>X</button>
    </span>
  )
}

export default Tag
