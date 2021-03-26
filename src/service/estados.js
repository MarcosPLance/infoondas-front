import axios from 'axios'

const getEstados = () => axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/15|16|21|22|23|24|25|26|27|28|29|32|33|35|41|42")

export {getEstados}