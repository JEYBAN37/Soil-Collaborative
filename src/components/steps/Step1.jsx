import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'

const Step1 = () => {
  const { productorData, setProductorData } = useContext(StepContext)
  const handleChange = (event) => {
    const { name, value } = event.target
    setProductorData({ ...productorData, [name]: value })
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-x-20 gap-y-24  '>
      <div>
        <h1 className=' text-[#54925D] font-bold uppercase '>Nombre</h1>
        <div className=' p-1   '>
          <input
            className='rounded-xl p-2 border-2 border-[#54925D]   w-[350px] '
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['nombre'] || ''}
            name='nombre'
            placeholder='Nombre del productor'
          />
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Apellido</div>
        <div className=' p-1 flex '>
          <input
            className='rounded-xl p-2  border-2 border-[#54925D] w-[350px]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['apellido'] || ''}
            name='apellido'
            placeholder='Apellido del productor'
          />
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>Sexo</div>
        <div className=' p-1 '>
          <select
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['genero'] || ''}
            name='genero'
            placeholder='Genero'
          >
            <option value=''>Seleccione una opción</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>

          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase '>Etnia</div>
        <div className=' p-1 '>
          <select
            className='rounded-xl p-2 w-[350px] border-2  border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['etnia'] || ''}
            name='etnia'
            placeholder='Etnia pérteneciente'
          >
            <option value=''>Seleccione una opción</option>
            <option value='A'>Afrodescendiente</option>
            <option value='I'>Indígena</option>
            <option value='R'>Raizal</option>
            <option value='P'>Palenquero</option>
            <option value='G'>Gitano</option>
            <option value='N'>Ninguna</option>
          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>
          Tipo De Documento
        </div>
        <div className=' p-1  '>
          <select
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['tipo_documento'] || ''}
            name='tipo_documento'
            placeholder='tipo de documento'
          >
            <option value=''>Seleccione una opción</option>
            <option value='C'>Cédula</option>
            <option value='E'>Cédula extranjera</option>
            <option value='P'>Pasaporte</option>
          </select>
        </div>
      </div>
      <div>
        <div className=' text-[#54925D] font-bold uppercase'>
          Numero De Documento
        </div>
        <div className=' p-1 flex '>
          <input
            className='rounded-xl p-2 w-[350px] border-2 border-[#54925D]'
            onChange={handleChange}
            // eslint-disable-next-line dot-notation
            value={productorData['numero_documento'] || ''}
            name='numero_documento'
            placeholder='numero de documento'
          />
        </div>
      </div>
    </div>
  )
}

export default Step1
