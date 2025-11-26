import React from 'react'

export default async function ProductIdPage({params}) {
  
  const { id } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()


  return (
    <div>product details pagess : {data.name}</div>
  )
}
