import { Link } from 'react-router-dom'
import detalle from '../../../assets/img/detalle.png'
import { getNombre, tipoPosesionCultivo, tipoPredio } from '../../../enums/enums'

const GridPredios = ({ data, productorId }) => {
  return (
    <table className='min-w-full divide-y divide-gray-200 mt-4'>
      <thead>
        <tr>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-md'>
            Departamento
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Municipio
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Vereda
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Tipo de Predio
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Tipo posesión cultivo
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-md'>
            Detalles
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {data.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'bg-[#9DC08B]' : 'bg-gray-300'}>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.departamento}</div>
            </td>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.municipio}</div>
            </td>
            <td className=' px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.vereda}</div>
            </td>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{getNombre(item.tipo_predio, tipoPredio)}</div>
            </td>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{getNombre(item.tipo_posesion_cultivo, tipoPosesionCultivo)}</div>
            </td>
            <td className=' px-6 py-4 whitespace-nowrap'>
              <div className=' flex gap-x-4 text-sm text-gray-500'>
                <Link to={`/predios/detalle/${productorId}/${item.id}`} className='w-10'>
                  <img src={detalle} className='w-10' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default GridPredios
