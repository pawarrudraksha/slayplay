import React from 'react'

const ListenAuthorItem = (props) => {
  const {name,image}=props
  return (
    <>
    <div className="authorPhotoName">
    <div className='authorPhoto'>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
    </div>
    </>
  )
}

export default ListenAuthorItem
