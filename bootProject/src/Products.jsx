import React from 'react'
import { useParams } from 'react-router-dom'


export default function Products() {
  const {d}=useParams()
  return (
    <div>Products {d} </div>
  )
}
