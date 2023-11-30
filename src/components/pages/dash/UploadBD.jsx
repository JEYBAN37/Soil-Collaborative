import Logo from '../../../assets/img/logo.svg'
import * as XLSX from 'xlsx'
import { useState } from 'react'
import enviarXSLM from '.././../../api/api-cargar-XSLM'
import toast from 'react-hot-toast'
import PageContainer from '../navigation/PageContainer'
import { useNavigate } from 'react-router-dom'
const UploadBD = () => {
  const [productorData, setProductorData] = useState([])
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
  const save = async () => {
    try {
      const data = await enviarXSLM(productorData)
      console.log(data)
      navigate('/')
    } catch (error) {
      console.log(error)
      const errorData = error.response.data
      console.log(errorData)

      const keys = Object.keys(errorData)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const error = errorData[key].join(' , ')
        toast.error(`${key} : ${error}`)
        console.log(error)
      }
    }
  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader()

      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result

        const wb = XLSX.read(bufferArray, { type: 'buffer' })

        const wsname = wb.SheetNames[0]

        const ws = wb.Sheets[wsname]

        const data = XLSX.utils.sheet_to_json(ws)

        resolve(data)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
    promise.then((d) => {
      console.log(d)
      setProductorData(d)
    })
  }

  return (
    <PageContainer
      title='Cargar Base De Datos'
    >
      <div className='flex justify-center items-center h-100 '>
        <img
          src={Logo}
          className='w-1/3  hidden sm:block'
        />
        <div>
          <input
            onChange={async (e) => {
              const file = e.target.files[0]

              await readExcel(file)
            }}
            type='file'
            id='myFile'
            name='filename'
            placeholder='Cargar Base De Datos'
            className=' border-2 border-lime-100 rounded-xl p-4 bg-lime-50'
          />
        </div>
      </div>
      <div className='flex-1   '>
        <button
          className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2
       bg-[#54925D] hover:bg-[#54925D] hover:text-white transition duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none mr-40'
        >
          <a href='https://docs.google.com/spreadsheets/d/1uHwTanuSs2m3csrEE5dJuQ8kWfmqkYPy/edit?usp=sharing&ouid=110728805717517957050&rtpof=true&sd=true' target='_bank'> Formato</a>
        </button>
        <button
          onClick={save}
          className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2
       bg-[#54925D] hover:bg-[#54925D] hover:text-white transition duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none'
        >
          Guardar
        </button>
      </div>
    </PageContainer>
  )
}

export default UploadBD
