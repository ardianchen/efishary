import axios from 'axios'
import {
  currency
} from '../../models'
export const checkCurrency = async () => {
  const data = await currency.findAndCountAll({ name: 'IDR_USD' })
  return data
}
export const find = async () => {
  const resp = []
  const respon = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list', {})
  resp.push(respon.data)
  return resp[0]
}
export const findCurrency = async () => {
  const resp = []
  const respon = await axios.get('https://free.currconv.com/api/v7/convert?q=USD_IDR,IDR_USD&compact=ultra&apiKey=bc5fb8032336c7f0608a', {})
  resp.push(respon.data)
  return resp[0]
}

export const findKomoditas = async () => {
  const resp = []
  const respon = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list', {})
  resp.push(respon.data)
  return resp[0]
}
