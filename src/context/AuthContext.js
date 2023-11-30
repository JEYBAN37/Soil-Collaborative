import { createContext, useContext, useEffect, useState } from 'react'
import { loadToken, saveToken, whoAmI } from '../api/api-service'
import { LoadingContext } from './LoadingContext'

const AuthContext = createContext()

const AuthContextWrapper = ({ children }) => {
  const [authData, setAuthData] = useState(null)
  const { setLoading, loading } = useContext(LoadingContext)

  const { user, role } = authData || {}
  const value = {
    authData,
    setAuthData,
    isLogged: authData !== null,
    fullName: user?.first_name + ' ' + user?.last_name,
    isAdmin: role === 'ADMINISTRADOR',
    logout: () => setAuthData(null)
  }

  useEffect(() => {
    const fn = async () => {
      try {
        loadToken()
        const data = await whoAmI()
        setAuthData(data)
      } catch (e) {
        saveToken(null)
      }
      setLoading(false)
    }

    fn()
  }, [setLoading])

  if (loading) {
    return null
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthContextWrapper
}
