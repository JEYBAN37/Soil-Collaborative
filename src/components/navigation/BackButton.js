import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className='absolute top-7 left-5 z-30'>
      <img src='https://www.svgrepo.com/show/513806/arrow-left.svg' alt='Back' className='w-6 h-6' />
    </button>
  )
}

export default BackButton
