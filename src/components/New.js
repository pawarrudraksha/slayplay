import React, { useEffect, useState} from 'react'
import ForYou from './ForYou'
import axios from 'axios';
import NewItem from './NewItem';



const New = (props) => {
  useEffect(()=>{
    fetchData()
  },[])
  const[shows,setShows]=useState([])
  const fetchData = async (e) => {
    // e.preventDefault()
    const {data} = await axios.get(`https://api.spotify.com/v1/shows`, {
        headers: {
            Authorization: `Bearer ${props.token}`
        },
        params: {
            ids:"7IQnc6lu3c7yTFzmGNx1dA,5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ,6ZcvVBPQ2ToLXEWVbaw59P,2WHYXXjOyGztKyFR9EnP1J,7gVmseTIEPKK1EsCzQjKPQ,03Er7mSPq9IEewOgbPD3vO,2acKIpH0hrcGl0P8sU2Avj",
            // ids:"7IQnc6lu3c7yTFzmGNx1dA,5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ,2acKIpH0hrcGl0P8sU2Avj,2WHYXXjOyGztKyFR9EnP1J",
            market:"IN"
        }
    })
    setShows(data.shows)
}
  return (
    <>
    <div>
     <ForYou fetchData={fetchData} />
    </div>
    <div className="mapContent">
      {
          shows.map((element)=>{
              return(
                <div  key={element.uri}>
                  <NewItem
                    description={element.description}
                    imageUrl={element.images[0].url}
                    name={element.name}
                    publisher={element.publisher}
                    total_episodes={element.total_epsiodes}
                  

                  />
                </div>
              )
          })
      }
    </div>
    </>
  )
}

export default New
