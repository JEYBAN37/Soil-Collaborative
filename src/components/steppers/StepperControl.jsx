const StepperControl = ({ handleClick, currentStep, steps, onSave }) => {
  const handleSave = () => {
    onSave()
  }

  return (
    <div className='container flex  justify-around  mt-36   '>
      <button
        onClick={() => handleClick('back')}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2
         bg-[#54925D] hover:bg-[#54925D] hover:text-white transition duration-2oo ease-out ${
           currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
         }`}
      >
        Volver
      </button>
      <button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          if (currentStep === steps.length) {
            handleSave()
          } else {
            handleClick('next')
          }
        }}
        className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2
         bg-[#54925D] hover:bg-[#54925D] hover:text-white transition duration-200 ease-in-out '
      >
        {currentStep === steps.length ? 'Guardar' : 'Siguiente'}
      </button>
    </div>
  )
}

export default StepperControl
