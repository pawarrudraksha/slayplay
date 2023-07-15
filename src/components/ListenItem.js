import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListenItem = (props) => {
    const {name,image,publisher,totalDuration}=props
    return (
        <>
        <div className="listenItem">
            <div className="listenItembox1">
                <img src={image} alt="" />
            </div>
            <div className="listenItembox2">
                <h3>{name}</h3>
                <i className="fa-solid fa-ellipsis-vertical fa-2x" id='kebab'></i>              
                <i className="fa-sharp fa-solid fa-circle-play fa-2x " id='playButton' ></i>
                <p>{publisher}</p>
                {/* <h3>2 out of {totalDuration/60000} minutes</h3> */}
            </div>
        </div>
        </>
    )
    }

export default ListenItem
