import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className='text-2xl font-semibold text-primary'>
        ./prototurk
        <span className='text-sm ml-2 text-zinc-400'>
            v3.0.0
        </span>
    </Link>
  )
}

export default Logo