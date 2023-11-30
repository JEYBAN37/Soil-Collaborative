
export let token = null

const TOKEN_KEY = 'token'
export const apiUrl = process.env.REACT_APP_API_URL

export const loadToken = () => {
  token = localStorage.getItem(TOKEN_KEY)
}

export const saveToken = (token) => {
  if (!token) {
    localStorage.removeItem(TOKEN_KEY)
    return
  }
  localStorage.setItem(TOKEN_KEY, token)
}

export const login = async (username, password) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  const urlencoded = new URLSearchParams()
  urlencoded.append('username', username)
  urlencoded.append('password', password)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  }

  const response = await fetch(apiUrl + '/auth/login', requestOptions)
  const { access } = await response.json()
  token = access
  saveToken(access)
}

export const whoAmI = async () => {
  if (!token) {
    throw new Error('No hay ningun token valido')
  }

  const myHeaders = buildHeaders()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

  const response = await fetch(apiUrl + '/auth/whoami', requestOptions)
  return await response.json()
}

export const getUrl = (api) => {
  return apiUrl.endsWith('/') ? apiUrl + api : apiUrl + '/' + api
}

export const buildHeaders = () => {
  const myHeaders = new Headers()
  if (token) {
    myHeaders.append('Authorization', 'Bearer ' + token)
  }
  return myHeaders
}
