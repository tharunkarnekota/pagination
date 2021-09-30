import React,{useState,useEffect} from 'react'

import axios from 'axios';
import Pagination from './Pagination';

const App = () => {
  const [text,setText] = useState([]);
  const [perpage,setPerpage] = useState([]);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res => {setText(res.data);
              setPerpage(res.data.slice(0,10));
            }
    )
  },[])
  const pageHandler = (pageNumber) =>{
    setPerpage(text.slice((pageNumber*10)-10,pageNumber*10))
  }
  return (
    <div >
      {text.length >=1 ?
      <div>
        {perpage.map( post =>
        <div className="card">{post.title}</div>)}
        <br/>
        <Pagination text={text} pageHandler={pageHandler}/>
      </div>
      :
      <p>Data not Loaded</p>
      }
    </div>
  )
}

export default App
