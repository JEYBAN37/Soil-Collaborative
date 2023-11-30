/* eslint-disable no-undef */
import { useState } from 'react'
import StepperControl from '../../steppers/StepperControl'
import Stepper from '../../steppers/Stepper'
import Step1 from '../../steps/Step1'
import Step2 from '../../steps/Step2'
import { StepContext } from '../../../context/StepContext'
import enviarDatosProductores from '../../../api/api-register-productors'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../../pages/navigation/PageContainer'

function FormRegisterProductores () {
  const [currentStep, setCurrentStep] = useState(1)
  const [productorData, setProductorData] = useState('')
  const [finalData, setFinalData] = useState([])
  const steps = ['Paso 1 ', 'Paso 2']
  const navigate = useNavigate()
  const dipalySteps = (step) => {
    return step === 1 ? <Step1 /> : <Step2 />
  }

  const save = async () => {
    try {
      const data = await enviarDatosProductores(productorData)
      console.log(data)
      toast.success('Datos enviados correctamente')
      navigate('/listado_productores')
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
  const handleClick = (direction) => {
    let newStep = currentStep

    direction === 'next' ? newStep++ : newStep--
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <PageContainer title=' Registro De Nuevos Productores'>
      <div className='mx-36 '>
        <div className='container horizontal mt-5'>
          <Stepper steps={steps} currentStep={currentStep} />

          <div className='my-10 p-10'>
            <StepContext.Provider
              value={{
                productorData,
                setProductorData,
                finalData,
                setFinalData
              }}
            >
              {dipalySteps(currentStep)}
            </StepContext.Provider>
          </div>
        </div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          onSave={save}
        />
      </div>
    </PageContainer>

  )
}

export default FormRegisterProductores
