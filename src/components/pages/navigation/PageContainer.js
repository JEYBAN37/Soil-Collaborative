import BackButton from '../../navigation/BackButton'
import React from 'react'

const PageContainer = ({ title, detail, children }) => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full  shadow-xl rounded-xl bg-[#EDF1D6] p-10 gap-3'>
      <BackButton />

      <div className='text-white text font-bold text-4xl bg-[#54925D] text-center rounded-t-xl w-full absolute top-0 h-20 flex flex-col align-center justify-center'>
        <span>{title}</span>
      </div>

      <div className='flex flex-col items-center justify-center w-full h-full gap-3 mt-20'>
        {
          detail && <p className='text-left w-full px-10 font-semibold text-xl'>{detail}</p>
        }

        {children}
      </div>

    </div>
  )
}

export default PageContainer
