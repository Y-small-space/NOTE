import React from 'react'
import { useLocation} from 'react-router-dom'

export default function Detail() {
  const {state:{title,contents}}  = useLocation()

  return (
    <div>
      <h2>{title}</h2>
      <h3>{contents}</h3>      
    </div>
  )
}
