import {
  find, findCurrency, checkCurrency, findKomoditas
} from '../../repositories/storage'
// import Paging from '../../lib/paging'

export const read = async (payload = {}) => {
  let idx = 0
  const data = await find()
  const resCurrency = await checkCurrency()
  let currency = resCurrency.rows
  if (resCurrency.count === 0) {
    currency = await findCurrency()
  }

  for (idx in data) {
    const price = data[idx].price === null ? 0 : data[idx].price
    data[idx].priceUSD = Math.round(Number(price) * Number(currency[0].value))
  }
  return {
    msg: 'found',
    res: data
  }
}
export const readKomoditas = async (payload = {}) => {
  let sortProvince = []
  let sortDate = []
  const data = await findKomoditas()
  sortProvince = data.sort()
  sortDate = sortProvince.sort(function (a, b) { return a - b })
  return {
    msg: 'found',
    res: sortDate
  }
}
