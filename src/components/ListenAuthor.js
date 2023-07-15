import React,{useEffect, useState} from 'react'
import axios from 'axios';
import AuthorItem from './AuthorItem';
import ListenItem from './ListenItem';


const ListenAuthor = (props) =>{
    const nextClick=()=>{
      //todo
    }
    useEffect(()=>{
      fetchContinuePlaying()
      fetchAuthors()
    })
    const {token}=props 
    const[artists,setArtists]=useState([])
    const[name,setName]=useState("")
    const[totalDuration,setTotalDuration]=useState("")
    const[image,setImage]=useState("")
    const[publisher,setPublisher]=useState("")
    // const[episode,setEpisode]=useState([])
    const fetchAuthors=async (e)=>{
      // e.preventDefault()
      const {data} = await axios.get(`https://api.spotify.com/v1/artists`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              ids:"0C8ZW7ezQVs4URX5aX7Kqx,1uNFoZAHBGtllmzznpCI3s,66CXWjxzNUsdJxJ2JdwvnR,06HL4z0CvFAxyc27GXpf02,4nDoRrQiYLoBzwC5BhVJzF,6M2wZ9GZgrQXHCFfjv46we"
              
          }
        })
        setArtists(data.artists)
      
  }

  const fetchContinuePlaying= async (e)=>{
    // e.preventDefault()
    const {data} = await axios.get(`https://api.spotify.com/v1/episodes/08ndJHg3DSpONWUIuXuCFI`, {
        headers: {
              Authorization: `Bearer ${token}`
        },
        params: {
            id:"08ndJHg3DSpONWUIuXuCFI",                       
        }
      })
      
      setName(data.name)  
      setTotalDuration(data.duration_ms) 
      setImage(data.images[0].url)
      setPublisher(data.show.publisher)  
      // console.log(data);
    }

 
  return (
    <>
    
    <div className="listenAndAuthor" >
      <div className="box1">
          <div className="continueListenHeader">
            <h2>Continue Listening</h2>
            <i className="fa-sharp fa-solid fa-chevron-right " onClick={nextClick}></i>
          </div>
          <div className="box1MapedContent">
             <ListenItem name={name} image={image} publisher={publisher}   totalDuration={totalDuration}/>
          </div>
      </div>
      <div className="box2">
            <div className="authorHeader">
                <h2>Trending authors</h2>
                <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextClick}></i>
            </div>
            <div className="box2MapedContent">
                {
                  artists.map((element)=>{
                    return <div  key={element.id} >
                      <AuthorItem
                      image={element.images[0].url}
                      name={element.name}
                      />
                    </div>
                  })
                }
            </div>
      </div>
    </div>
     
     </>
  )
}

export default ListenAuthor
