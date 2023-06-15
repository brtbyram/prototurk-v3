import React, { useEffect } from 'react'
import { setSidebarType } from '../../../stores/app/actions'

function UnansweredQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  },[])

  return (
    <div>cevaplanmamış sorular</div>
  )
}

export default UnansweredQuestions