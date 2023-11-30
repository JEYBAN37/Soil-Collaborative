import { useNavigate, useParams } from 'react-router-dom'
import GridPredios from '../../grids/predios/GridPredios'
import React, { useEffect, useState } from 'react'
import { getOne } from '../../../api/api-productores'
import PageContainer from '../navigation/PageContainer'
import LoadingSpinner from '../navigation/LoadingSpinner'
import { getByUserId } from '../../../api/api-predios'
import { Button } from 'devextreme-react'

const ListPrediosPage = () => {
  const { id } = useParams()

  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const { productor, predios } = data || {}

  useEffect(() => {
    const fn = async () => {
      const productor = await getOne(id)
      if (!productor) {
        return navigate('/404')
      }

      const predios = await getByUserId(id)
      setData({ productor, predios })
    }
    fn()
  }, [id, navigate])

  return (
    <PageContainer
      title={'Listado de predios del productor: ' + (productor ? productor.nombre + ' ' + productor.apellido : '')}
      detail=' Aquí se muestran todos los productores registrados en el sistema.'
    >

      <div className='flex justify-end w-full px-10'>
        <Button
          text='Agregar predio'
          type='default'
          icon='add'
          onClick={() => navigate('/predios/detalle/' + id)}
        />
      </div>

      {
        data
          ? <GridPredios data={predios} productorId={id} />
          : (<LoadingSpinner />)
      }

    </PageContainer>
  )
}

export default ListPrediosPage
