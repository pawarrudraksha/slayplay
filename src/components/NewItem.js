import React, { useState } from 'react'
import icon from "../pictures/icon.jpg";

const New_Item = (props) => {
  // const [heartMode,setHeartMode]=useState["light"]
  // const heartColor=()=>{
  //     if(heartMode==="light"){
  //         setHeartMode("pink")
  //     }
  //     else{
  //         setHeartMode("light")
  //     }
  // }
  return (
   <>
   <div className="newItem">
    <div className="card">
         
          <i className="fa-regular fa-heart"></i>
         {/* <i className="fa-thin fa-circle-heart"></i> */}
        <img src={props.imageUrl?props.imageUrl:{icon}}  alt="No image" />
        <span>{props.total_episodes} episodes</span>
    </div>
    <div className="lowerBody">
        <h3> {props.name}</h3>
        <p>By {props.publisher}</p>
    </div> 
    </div>
    </>
  )
}

export default New_Item
