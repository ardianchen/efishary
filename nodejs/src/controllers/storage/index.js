import status from 'http-status'
import * as service from '../../services/storage'
import r from '../../lib/resjson'

export const read = async (req, res) => {
  const { params, query } = req
  const data = await service.read({ params: params, query: query })
  const response = r(data.msg, data.res, data.page)
  res.status(status.OK).json(response)
}
export const readKomoditas = async (req, res) => {
  const { params, query } = req
  const data = await service.readKomoditas({ params: params, query: query })
  const response = r(data.msg, data.res, data.page)
  res.status(status.OK).json(response)
}
