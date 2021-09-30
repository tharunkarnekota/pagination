import React,{useState,useEffect} from 'react'
import axios from 'axios';

const App = () => {
  const [data,setData] = useState([]);
 
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res => {setData(res.data)}
    )
  },[])
  return (
    <div>
      {data.length >=1 ?
      <div>
        {data.map(post =><div>{post.title}</div>)}
      </div>
      :
      <p>Data not Loaded</p>
      }
    </div>
  )
}

export default App
