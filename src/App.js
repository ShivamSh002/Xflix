import React, { useState ,useEffect } from 'react'
import "./App.css"
import NavBar from './Navbar/NavBar'
import Section from './Section/Section'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import UplaodVideo from './UplaodVideo/UplaodVideo';
import Login from './Login/Login';
import Register from './Register/Register';


const App = () => {
  const [videos, setVideos] = useState([])
  const[text,setText]= React.useState("")
 
  const fetchData = async (text) => {
      try {
        let response
        if(text === ""){
        response = await axios.get("http://localhost:8082/v1/videos")
        }else{
          response = await axios.get(`http://localhost:8082/v1/videos?title=${text}`)
        }
          
          return response.data.videos;
      } catch (error) {
          console.error(error);
          return null;
      }
  }

  useEffect(() => {
      const getData = async () => {
          const data = await fetchData(text);
          if (data) {
              setVideos(data);
              console.log(data);
          }
      };
      getData();
  }, [text])
  console.log(text)

  return (
    <div><Routes>
      <Route path="/" element={<div><NavBar text={text}  setText={setText}/>
      <Section videos={videos}/></div>}/>
      <Route path="/upload" element={<UplaodVideo/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes></div>
  )
}

export default App