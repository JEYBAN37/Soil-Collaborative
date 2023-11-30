import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './Layout.css'

const containerStyle = {
  height: 'calc(100vh - 4rem)',
  overflowY: 'auto'
}

const Layout = () => {
  return (
    <>

      <Navbar />
      <div className='principal_container p-10' style={containerStyle}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
