import React, { useEffect, useState } from 'react'
import "./RJ.css"
export default function RandomJoke() {
    const [data,setData] = useState('Joke will take few time to load')
    const func = async()=>{
        let raw = await fetch("https://official-joke-api.appspot.com/random_joke")
        let parsedData = await raw.json();
        console.log(parsedData)
        setData(parsedData)
    }
    useEffect(
        ()=>{
            func()
        },[]
    )
    const nextj=(e)=>{
        e.preventDefault()
        func()
    }
  return (
    <div>
        <>
            <h1>{data.type}</h1>
            <h2>{data.setup}</h2>
            <h5>{data.punchline}</h5>
            <button onClick={nextj}>next joke</button>
        </>
    </div>
  )
}
