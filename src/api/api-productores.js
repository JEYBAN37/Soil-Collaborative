import { buildHeaders, getUrl } from './api-service'

export const getAll = async () => {
  const myHeaders = buildHeaders()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

  const response = await fetch(getUrl('productores'), requestOptions)
  const { data } = await response.json()
  return data
}

export const getOne = async (id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  const response = await fetch(getUrl('productores') + '/' + id, requestOptions)
  const { data } = await response.json()
  return data[0]
}
