import React, { useEffect } from 'react'
import   {useLoaderData} from  'react-router-dom'
function Github() {
    // const [data , setData] = React.useState([])
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/chauhanmuskan291980-wq')
    //  .then((response)=>response.json())
    //  .then(data =>{
    //     console.log(data)
    //     setData(data)
    //  })
    // },[])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gary-600 text-white 
    p-4 text-3xl'>
      Github Followers :{data.followers}
      Github Following : {data.following}
      Github Location : {data.location}

    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/chauhanmuskan291980-wq')
    return response.json()
}
