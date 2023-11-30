import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getById, save } from '../../../api/api-predios'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../pages/navigation/LoadingSpinner'

const PredioForm = ({ productorId, id }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    if (!id) {
      setFormData({ productor_id: productorId })
      return
    }

    getById(id).then(setFormData)
  }, [id, productorId])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    // eslint-disable-next-line no-unused-vars
    await toast.promise(save(formData), {
      loading: 'Guardando predio...',
      success: 'Predio guardado correctamente',
      error: 'No se pudo crear el predio'
    })

    navigate(-1)
  }

  if (!formData) {
    return <LoadingSpinner />
  }

  return (

    <div className=' flex h-[850px] w-[screen] bg-[#EDF1D6] items-center flex-col'>
      <div className=' w-[947px] h-[713px] '>
        <h1 className=' px-9  text-2xl text-[#54925D] font-semibold'>Informacion Basica</h1>
        <div className='flex items-center flex-col '><span className='bg-[#609966] w-[880px] h-[1px] mt-2' /></div>
        <h2 className=' mt-[14px] px-9 font-semibold text-lg text-[#54925D] '>Ubicacion</h2>

        <div className=' flex flex-wrap gap-[14px] place-content-center font-semibold text-[#54925D] '>
          <div className='mt-[18px]'>
            <h1 className='text-base'>Departamento</h1>

            <input
              name='departamento'
              type='text'
              className=' w-[285px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              onChange={handleInputChange}
              value={formData.departamento}
            />
          </div>

          <div className='mt-[18px]'>
            <h1 className='text-base'>Municipio</h1>

            <input
              name='municipio'
              type='text'
              className=' w-[285px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              onChange={handleInputChange}
              value={formData.municipio}
            />
          </div>

          <div className='mt-[18px]'>
            <h1 className='text-base'>Vereda</h1>
            <input
              name='vereda'
              type='text'
              className=' w-[285px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              onChange={handleInputChange}
              value={formData.vereda}
            />
          </div>
        </div>

        <div className=' flex flex-wrap gap-[14px] place-content-center font-semibold text-[#54925D] '>
          <div className='mt-[18px]'>
            <h1 className='text-base'>Tipo de tenecia de Predio</h1>

            <select
              name='tipo_predio'
              type='text'
              className=' w-[285px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              onChange={handleInputChange}
              value={formData.tipo_predio}
            >
              <option value=' ' />
              <option value='P'>Privada</option>
              <option value='C'>Comunal</option>
              <option value='LA'>Libre acceso</option>
              <option value='R'>Estatal</option>
            </select>

          </div>

          <div className='mt-[18px]'>
            <h1 className='text-base'> Tipo Posesion sobre cultivo</h1>
            <select
              name='tipo_posesion_cultivo'
              type='text'
              className=' w-[285px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              onChange={handleInputChange}
              value={formData.tipo_posesion_cultivo}
            >
              <option value=' ' />
              <option value='T'>Total</option>
              <option value='F'>Fraccionada</option>
              <option value='A'>Asociacion</option>
              <option value='R'>Arrendada</option>
            </select>
          </div>

          <div className='mt-[18px]'>
            <div className=' w-[285px] h-[39px]' />
          </div>

        </div>
        <h1 className=' mt-8 px-9  text-2xl text-[#54925D] font-semibold'>Caracteristicas del Predio</h1>
        <div className='flex items-center flex-col '><span className='bg-[#609966] w-[880px] h-[1px] mt-2' /></div>
        <div className=' flex flex-wrap gap-[43px] place-content-center font-semibold text-[#54925D] '>
          <div className='mt-[18px]'>
            <h1 className='text-base'>Coordenadas Espaciales</h1>
            <input
              name='coordenadas'
              type='text'
              className=' w-[323px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1 '
              placeholder=" 19°25'42'' N y 99°7'66'' O"
              onChange={handleInputChange}
              value={formData.coordenadas}
            />

          </div>

          <div className='mt-[18px]'>
            <h1 className='text-base'>Altitud</h1>
            <input
              name='altitud'
              type='number'
              className=' w-[143px] h-[39px] mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
              placeholder='                    mm'
              onChange={handleInputChange}
              value={formData.altitud}
            />
          </div>

          <div className='mt-[18px]'>
            <div className=' w-[330px] h-[39px]' />
          </div>

          <div className='flex flex-wrap gap-10 place-content-center font-semibold '>

            <div>
              <h1 className='text-base'>Area total de<br />cultivo de frijol</h1>
              <input
                name='area_cacao'
                type='text'
                className=' w-40 h-9 mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
                placeholder='                           ha'
                onChange={handleInputChange}
                value={formData.area_cacao}
              />
            </div>

            <div>
              <h1 className='text-base'>Area total en<br />otros cultivos</h1>
              <input
                name='area_otros_cultivos'
                type='text'
                className=' w-40 h-9 mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
                placeholder='                           ha'
                onChange={handleInputChange}
                value={formData.area_otros_cultivos}
              />
            </div>

            <div>
              <h1 className='text-base'>Area total en<br />rastrojos</h1>
              <input
                name='area_rastrojo'
                type='text'
                className=' w-40 h-9 mt-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black px-2 focus:outline-none focus:border-[#609966] focus:ring-[#609966] block sm:text-sm focus:ring-1'
                placeholder='                           ha'
                onChange={handleInputChange}
                value={formData.area_rastrojo}
              />
            </div>

          </div>
        </div>

        <div className=' mt-11 flex flex-wrap justify-around place-content-center'>

          <button className='bg-[#609966] w-[150px] h-[40px] rounded-md text-xl font-bold text-white hover:bg-[#224826]'>
            <h1 className='mb-1'>volver</h1>
          </button>
          <button
            className='bg-[#609966] w-[150px] h-[40px] rounded-md text-xl font-bold text-white hover:bg-[#224826]'
            onClick={handleSubmit}
          ><h1 className='mb-1'>Guardar</h1>
          </button>

        </div>

      </div>

    </div>

  )
}

export default PredioForm
