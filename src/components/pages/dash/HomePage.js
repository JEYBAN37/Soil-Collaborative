import img from '../../../assets/img/principal.jpg'

const style = {
  height: 'calc(100vh - 10rem)'
}

const HomePage = () => {
  return (
    <div className='flex flex-row p-10 2xl:p-40 lg:p-28' style={style}>
      <div className='grid md:grid-cols-5 grid-cols-1  h-full w-full bg-[#D9D9D9] rounded-2xl shadow-xl opacity-95'>
        <div className='col-span-3 flex flex-col align-center justify-center px-10 text-[#40513B] gap-5 md:gap-3 md:text-left text-center'>
          <h1 className='md:text-4xl  text-xl  font-bold'>¡Bienvenido!</h1>
          <p className='md:text-2xl text-lg md:font-semibold'>Soil es el programa que gestionón nuestros productores regionales.</p>
          <br />
        </div>
        <div className='col-span-2'>
          <img src={img} alt='Logo' className='h-full rounded-l-none rounded-2xl object-cover' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
