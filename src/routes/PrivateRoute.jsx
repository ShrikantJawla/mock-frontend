import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((s) => s.auth)
  console.log(auth)
  if (!auth) {
    return <Navigate to={'/'} />
  }
  return children
}

export default PrivateRoute
