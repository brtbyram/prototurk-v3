import React from 'react'
import { useEffect } from 'react'
import { setSidebarType } from '../../../stores/app/actions'

function UnsolvedQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  },[])

  return (
    <div>çözülmemiş sorular</div>
  )
}

export default UnsolvedQuestions