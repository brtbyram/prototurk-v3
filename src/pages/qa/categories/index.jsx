import React, { useEffect } from 'react'
import { setSidebarType } from '../../../stores/app/actions'

function Categories() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  },[])

  return (
    <div>kategoriler</div>
  )
}

export default Categories