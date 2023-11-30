import { Navigate, Outlet } from 'react-router-dom'

const ConditionalRoute = ({ condition, component, eject }) => {
  return condition ? (component ?? <Outlet />) : <Navigate to={eject} />
}

export default ConditionalRoute
