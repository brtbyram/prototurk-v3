import React, { useEffect } from 'react'
import { setSidebarType } from '../../stores/app/actions'

function QaDashboard() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  },[])

  return (
    <div>
      Qa page
    </div>
  )
}

export default QaDashboard