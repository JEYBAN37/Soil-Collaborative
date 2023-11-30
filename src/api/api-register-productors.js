import axios from 'axios'
import { getUrl } from './api-service'

export const enviarDatosProductores = async (data) => {
  return await axios.post(getUrl('productores'), data)
}

export default enviarDatosProductores
