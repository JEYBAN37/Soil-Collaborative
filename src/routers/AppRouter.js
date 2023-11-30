import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Layout from '../components/navigation/Layout'
import LoginPage from '../components/pages/auth/LoginPage'
import FormRegisterProductores from '../components/forms/auth/FormRegisterProductores'

import ConditionalRoute from '../components/utils/ConditionalRoute'
import NotFoundPage from '../components/pages/navigation/NotFoundPage'
import HomePage from '../components/pages/dash/HomePage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import UploadBD from '../components/pages/dash/UploadBD'
import ListProductoresPage from '../components/pages/productores/ListProductoresPage'
import ListPrediosPage from '../components/pages/predios/ListPrediosPage'
import CreacionPredioPage from '../components/pages/predios/CreacionPredioPage'

const AppRouter = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/*' element={<ConditionalRoute condition={isLogged} component={<Layout />} eject='/auth/login' />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<Navigate to='/404' />} />
        <Route path='adicionar_productor' element={<FormRegisterProductores />} />
        <Route path='listado_productores' element={<ListProductoresPage />} />
        <Route path='cargar_db' element={<UploadBD />} />
        <Route path='productores/:id' element={<Outlet />} />
        <Route path='predios/:id' element={<ListPrediosPage />} />
        <Route path='predios/detalle/:productorId' element={<CreacionPredioPage />} />
        <Route path='predios/detalle/:productorId/:id' element={<CreacionPredioPage />} />
      </Route>
      <Route path='/auth/*' element={<ConditionalRoute condition={!isLogged} eject='/' />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Route>

      <Route path='/404' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter
