
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  

})

function App() {
  useEffect( ()=>{
    (async ()=>{
      axiosClient.get('/test',{
        params: {
          id: 'aa'
        },
        timeout: 10000,
        headers: {
          'h1': 'h1-value',
          'Origin2': 'ayushkumar.club'
        }
      })
    })()
  })

  return (

    <>
      <h1>hi</h1>
    </>
  )
}

export default App
