import axios from 'axios'
export const apiDepartamento = async () => {
  return await axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
}
