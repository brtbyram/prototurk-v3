import React, { useEffect } from 'react'
import { setSidebarType } from '../../../stores/app/actions'

function PopularQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  },[])

  return (
    <div>popüler sorular</div>
  )
}

export default PopularQuestions