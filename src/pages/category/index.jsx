import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {

  const { categorySlug } = useParams()

  return (
    <div>
      Category Page = { categorySlug }
    </div>
  )
}

export default Category