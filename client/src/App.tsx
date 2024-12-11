
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',


})

function App() {
  const [input, setInput] = useState("");
  const idRef = useRef<null | number>(null);
  const [data, setData ] = useState(null)
  const countRef = useRef(0);
  useEffect(() => {
    (async () => {
      await axiosClient.get('/test', {
        params: {
          id: 'aa'
        },
        timeout: 10000,
        headers: {
          'h1': 'h1-value',
          'Origin2': 'ayushkumar.club',
          Authorization: "Bearer true",
        },
        withCredentials: true
      })
    })()
  }, [])

  countRef.current++;
  console.log(countRef.current)

  // debouncing
  useEffect(() => {
    (async () => {
      if(idRef.current) clearTimeout(idRef.current);      
      idRef.current = setTimeout(async () => {
        console.log("input", input)
        const temp = await axiosClient.post('/search', { input }, {
          headers: {
            "Content-Type": 'application/json'
          }
        })
        setData(temp.data)
        console.log(temp)
      },1000)

    })()
  }, [input])

  return (

    <>
      <h1>hi</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <input type='text' value={data || ""} readOnly/>
    </>
  )
}

export default App
