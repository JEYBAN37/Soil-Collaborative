import detalle from '../../../assets/img/detalle.png'
import cultivar from '../../../assets/img/cultivar.png'
import { Link } from 'react-router-dom'

const GridProductores = ({ data }) => {
  return (
    <table className='min-w-full divide-y divide-gray-200 mt-4'>
      <thead>
        <tr>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-md'>
            N° Documento
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Nombre Completo
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Departamento
          </th>
          <th className=' bg-[#54925D] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
            Vereda
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
              <div className='text-sm font-medium text-gray-900'>{item.numero_documento}</div>
            </td>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.nombre + ' ' + item.apellido}</div>
            </td>
            <td className=' px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.departamento}</div>
            </td>
            <td className='  px-6 py-4 whitespace-nowrap'>
              <div className='text-sm font-medium text-gray-900'>{item.vereda}</div>
            </td>
            <td className=' px-6 py-4 whitespace-nowrap'>
              <div className=' flex gap-x-4 text-sm text-gray-500'>
                <Link to={`/productores/${item.id}`} className='w-10'>
                  <img src={detalle} className='w-10' />
                </Link>

                <Link to={`/predios/${item.id}`} className='w-10'>
                  <img src={cultivar} className='w-10' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GridProductores
