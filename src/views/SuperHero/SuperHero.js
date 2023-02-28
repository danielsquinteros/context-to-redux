import React from 'react'

export default function Superhero({name, id, alterEgos}) {
  return (
    <div>
        <p>{id}</p>
        <h1>{name}</h1>
        <h4>{alterEgos}</h4>
    </div>
  )
}
