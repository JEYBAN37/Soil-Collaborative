import axios from 'axios'
import { getUrl } from './api-service'

export const enviarXSLM = async (data) => {
  return await axios.post(getUrl('cargar_archivo'), data)
}

export default enviarXSLM
