import status from 'http-status'
import * as service from '../../services/auth'
import r from '../../lib/resjson'

export const read = async (req, res) => {
  const { params, query } = req
  const data = await service.read({ params: params, query: query })
  const response = r(data.msg, data.res, data.page)
  res.status(status.OK).json(response)
}

export const detail = async (req, res) => {
  const { params } = req
  const data = await service.detail({ params: params })
  const response = r(data.msg, data.res)
  res.status(status.OK).json(response)
}

export const post = async (req, res) => {
  const { body } = req
  const data = await service.insert({ body: body })
  const response = r(data.msg, data.res)
  res.status(status.CREATED).json(response)
}

export const update = async (req, res) => {
  const { params, body } = req
  const data = await service.update({ params: params, body: body })
  const response = r(data.msg, data.res)
  res.status(status.CREATED).json(response)
}

export const remove = async (req, res) => {
  const { params } = req
  const data = await service.remove({ params: params })
  const response = r(data.msg, data.res)
  res.status(status.CREATED).json(response)
}

export const login = async (req, res) => {
  const { body } = req
  const data = await service.login({ body: body })
  const response = r(data)
  res.status(status.CREATED).json(response)
}
