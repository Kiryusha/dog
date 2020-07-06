// Плагин-надстройка над базовым функционалом axios. В основном используется для обработки ошибок.
import axios from 'axios'

const fetcher = axios.create({
  baseURL: 'https://dog.ceo'
})

export default fetcher
