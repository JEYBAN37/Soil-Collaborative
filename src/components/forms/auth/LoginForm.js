import { ButtonItem, EmptyItem, Form, RequiredRule, SimpleItem } from 'devextreme-react/form'
import { useContext, useMemo, useRef } from 'react'
import toast from 'react-hot-toast'
import { login, whoAmI } from '../../../api/api-service'
import { AuthContext } from '../../../context/AuthContext'

const buildSettings = (formRef, setAuthData) => {
  const form = () => formRef.current.instance
  const submit = async () => {
    if (!form().validate().isValid) {
      return toast.error('Por favor verifique los datos del formulario')
    }
    const { username, password } = form().option('formData')
    await login(username, password)

    const data = await toast.promise(whoAmI(), {
      loading: 'Iniciando sesión...',
      success: ({ user }) => 'Bienvenido de nuevo ' + user?.first_name + ' ' + user?.last_name + '!',
      error: 'Error al iniciar sesión, por favor verifique sus credenciales'
    })
    setAuthData(data)
  }
  return {
    username: {
      label: {
        text: 'Nombre de usuario'
      }
    },
    password: {
      label: {
        text: 'Contraseña'
      },
      options: {
        mode: 'password'
      }
    },
    button: {
      options: {
        text: 'Iniciar sesión',
        type: 'default',
        useSubmitBehavior: false,
        onClick: submit
      }
    },
    submit
  }
}

const LoginForm = () => {
  const form = useRef(null)
  const { setAuthData } = useContext(AuthContext)
  const settings = useMemo(() => buildSettings(form, setAuthData), [setAuthData])

  return (
  // eslint-disable-next-line react/jsx-handler-names
    <Form ref={form} onEditorEnterKey={settings.submit}>
      <SimpleItem dataField='username' label={settings.username.label}>
        <RequiredRule message='El correo electrónico es requerido' />
      </SimpleItem>
      <SimpleItem dataField='password' editorOptions={settings.password.options} label={settings.password.label}>
        <RequiredRule message='La contraseña es requerida' />
      </SimpleItem>
      <EmptyItem />
      <EmptyItem />
      <ButtonItem horizontalAlignment='center' buttonOptions={settings.button.options} />
    </Form>
  )
}

export default LoginForm
