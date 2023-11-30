import React, { useEffect, useState, useContext } from 'react'
import { getAll } from '../../../api/api-productores'
import { LoadingContext } from '../../../context/LoadingContext'
import GridProductores from '../../grids/productores/GridProductores'
import LoadingSpinner from '../navigation/LoadingSpinner'
import PageContainer from '../navigation/PageContainer'
import { Button } from 'devextreme-react'
import { useNavigate } from 'react-router-dom'

const ListProductoresPage = () => {
  const [productores, setProductores] = useState(null)
  const { setLoading } = useContext(LoadingContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = async () => {
      const data = await getAll()
      setProductores(data)
    }
    fn()
  }, [setLoading])

  console.log(productores)

  return (

    <PageContainer
      title='Listado de Productores'
      detail='Aquí se muestran todos los productores registrados en el sistema.'
    >

      <div className='flex justify-end w-full px-10'>
        <Button
          text='Agregar productor'
          type='default'
          icon='add'
          onClick={() => navigate('/adicionar_productor')}
        />
      </div>

      {
        productores ? <GridProductores data={productores} /> : <LoadingSpinner />
      }

    </PageContainer>
  )
}

export default ListProductoresPage
