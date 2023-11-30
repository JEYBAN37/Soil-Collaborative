import React from 'react'
import LoginForm from '../../forms/auth/LoginForm'
import logo from '../../../assets/img/logo.svg'

const LoginPage = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n  html, body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  .break-inside {\n    -moz-column-break-inside: avoid;\n    break-inside: avoid;\n  }\n  body {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    min-height: 100vh;\n    line-height: 1.5;\n  }\n  \n" }} />
      <div className='flex min-h-screen'>
        <div className='grid w-full bg-[#EDF1D6] grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:flex flex-1 flex-col lg:p-8 xl:p-12 border-r-2 border-[#609966] justify-center'>
            <div className='flex flex-col bg-white shadow-xl rounded-xl mx-10'>
              <img src={logo} alt='logo' className='w-screen mx-auto' />
            </div>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center px-10 relative gap-20'>

            <div className='absolute top-5 left-5 p-5'>
              <h3 className='text-3xl font-bold'>Bienvenido a</h3>
              <h2 className='text-5xl font-bold text-[#609966]'>Soil</h2>
            </div>

            <div className='flex flex-col justify-center w-1/2'>
              <h2 className='text-3xl font-bold text-[#609966]  text-center mb-2'>Iniciar sesión</h2>
              <p className='text-center text-gray-500 mb-3'>Ingresa tus credenciales para iniciar sesión</p>
              <div className='flex flex-col max-w-md space-y-5'>
                <LoginForm />
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
