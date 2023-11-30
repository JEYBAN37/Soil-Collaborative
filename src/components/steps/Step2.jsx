/* eslint-disable react/self-closing-comp */
import React, { useContext, useEffect, useState } from 'react'
import { StepContext } from '../../context/StepContext'
import getDate from '../utils/Date'
import { apiDepartamento } from '../../api/api-departametos'
const Step2 = () => {
  const { productorData, setProductorData } = useContext(StepContext)
  const [dateActual, setDateActual] = React.useState('')
  // eslint-disable-next-line no-undef
  const [listado, setListado] = useState([])
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-undef
  const handleChange = async (event) => {
    const { name, value } = event.target
    setProductorData({ ...productorData, [name]: value })
  }
  useEffect(() => {
    const data = async () => {
      try {
        const response = await apiDepartamento()
        setListado(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    data()
  }, [])
  const limitedApiResponse = listado.reduce((obj, objeto) => {
    if (!obj[objeto.departamento]) {
      obj[objeto.departamento] = objeto
    }
    return obj
  }, {})
  const uniqueList = Object.values(limitedApiResponse)

  return (
    <div className='flex flex-row flex-wrap justify-center gap-y-24 gap-x-20 '>
      <div className=' '>
        <div className=' text-[#54925D] font-bold uppercase'>Condicion</div>
        <div className=' p-1 '>
          <select
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['condicion'] || ''}
            name='condicion'
            placeholder='Condicion del productor'
          >
            <option value=''>Seleccione una opción</option>
            <option value='D'>Desplazamiento</option>
            <option value='V'>Victima</option>
            <option value='O'>Otra</option>
            <option value='N'>Ninguna</option>
          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Departamento</div>
        <div className=' p-1  '>
          <select
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['departamento'] || ''}
            name='departamento'
            placeholder='Departamento'
          >
            {uniqueList.map((item) => (
              <option key={item.id} value={item.departamento}>{item.departamento}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Municipio</div>
        <div className=' p-1  '>
          <select
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['municipio'] || ''}
            name='municipio'
            placeholder='Municipio'
          >
            <option value=''>Seleccione un municipio</option>
            {listado
              .filter((item) => item.departamento === productorData.departamento)
              .map((item) => (
                <option key={item.id} value={item.municipio}>{item.municipio}</option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Vereda</div>
        <div className=' p-1  '>
          <input
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['vereda'] || ''}
            name='vereda'
            placeholder='Verdeda'
          />
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Categoria</div>
        <div className=' p-1 '>
          <input
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            name='departamento'
            placeholder='Departamento'
          />
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>
          Fecha de Caracterizacion
        </div>
        <div className=' p-1  '>
          <input
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            value={dateActual}
            onClick={() => setDateActual(getDate())}

          />
        </div>
      </div>
    </div>
  )
}

export default Step2
