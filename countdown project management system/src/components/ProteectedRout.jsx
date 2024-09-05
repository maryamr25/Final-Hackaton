import { Navigate } from "react-router-dom"

const ProteectedRout = ({children,user}) => {
  return user ? children : <Navigate to='/'></Navigate>
}

export default ProteectedRout