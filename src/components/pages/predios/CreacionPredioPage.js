import PageContainer from '../navigation/PageContainer'
import PredioForm from '../../forms/predios/PredioForm'
import { useParams } from 'react-router-dom'

const CreacionPredioPage = () => {
  const { productorId, id } = useParams()
  return (
    <PageContainer title={(id ? 'Actualizacion' : 'Creacion') + ' de predio'}>

      <PredioForm productorId={productorId} id={id} />

    </PageContainer>
  )
}

export default CreacionPredioPage
