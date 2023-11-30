import { createContext, useState } from 'react'
import LoadingScreen from '../components/pages/navigation/LoadingScreen'

const LoadingContext = createContext({})

const LoadingContextWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentClass, setCurrentClass] = useState('animate__fadeIn')

  const value = {
    setLoading: async (value) => {
      setCurrentClass(value ? 'animate__fadeIn' : 'animate__fadeOut')
      await new Promise((resolve) => setTimeout(resolve, 300))
      setLoading(value)
    },
    currentClass,
    loading
  }

  return (
    <LoadingContext.Provider value={value}>

      {
        loading && <LoadingScreen />
      }

      <div className={loading ? 'hidden' : 'animate__animated animate__fadeIn'}>
        {children}
      </div>

    </LoadingContext.Provider>
  )
}

export {
  LoadingContextWrapper,
  LoadingContext
}
