import { getUrl } from './api-service'

export const getByUserId = async (userId) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  const response = await fetch(getUrl('predios') + '?productor_id=' + userId, requestOptions)
  const { data } = await response.json()
  return data
}

export const save = async (formData) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify(formData)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  const response = await fetch(getUrl('predios'), requestOptions)
  const { data } = await response.json()
  return data
}

export const getById = async (id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  const response = await fetch(getUrl('predios') + '/' + id, requestOptions)
  const { data } = await response.json()
  return data[0]
}
