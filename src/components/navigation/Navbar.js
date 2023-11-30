import logo from '../../assets/img/logo.svg'
import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Popup, Position } from 'devextreme-react/popup'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { fullName, isAdmin } = useContext(AuthContext)

  const toggleUserMenu = useCallback(() => setUserMenuOpen(!userMenuOpen), [userMenuOpen])

  return (
    <nav className='h-16 bg-[#54925D] grid grid-cols-6  place-items-center justify-center justify-items-center content-center'>
      <div className='w-14  bg-white rounded-xl shadow-xl'>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>

      <div className='flex items-center gap-10 text-white font-bold col-span-4'>
        <MenuItem title='Productores' id='productores'>

          <NavLink to='/adicionar_productor' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'>
            Adicionar productor
          </NavLink>

          {
            isAdmin && (
              <NavLink to='/cargar_db' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'>
                Cargar base de datos
              </NavLink>
            )
          }

          <NavLink to='/listado_productores' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'>
            Listado de productores
          </NavLink>

        </MenuItem>

        <MenuItem title='Registros individuales' />
        <MenuItem title='Registros masivos' />
        <MenuItem title='Reportes' />
      </div>

      <button className='inline-flex bg-white items-center relative px-2 border rounded-full hover:shadow-lg my-10' onClick={toggleUserMenu}>
        {
            userMenuOpen && <UserMenu closeFn={toggleUserMenu} />
        }

        <span className='text-sm font-thin px-2'>
          {fullName}
        </span>
        <div className='block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5'>
          <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false' style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
            <path d='m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z' />
          </svg>
        </div>
      </button>
    </nav>
  )
}

const MenuItem = ({ children, title, id }) => {
  const [menu, setMenu] = useState(false)
  const toogleMenu = useCallback(() => setMenu(!menu), [menu])
  return (
    <div className='cursor-pointer h-20 flex flex-column items-center' onClick={toogleMenu}>
      <span className={id}>{title}</span>
      {
            children && (
              <Popup
                visible={menu}
                onHiding={toogleMenu}
                dragEnabled={false}
                hideOnOutsideClick
                showCloseButton={false}
                showTitle={false}
                width={250}
                height='auto'
                className='absolute z-50'
              >
                <Position at='bottom' my='top' of={document.getElementsByClassName('productores')[0]} offset='0 15' />
                {children}
              </Popup>
            )
        }
    </div>
  )
}

const UserMenu = ({
  closeFn
}) => {
  const { logout } = useContext(AuthContext)

  const handleBackdropClick = useCallback((event) => {
    if (event.target === event.currentTarget) {
      closeFn()
    }
  }, [closeFn])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center' onClick={handleBackdropClick}>
      <div className='absolute right-10 top-14 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20'>
        <button
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>

  )
}

export default Navbar
