import {
  find,
  findOne,
  create,
  edit,
  del
} from '../../repositories/admin'
import Paging from '../../lib/paging'
import { checkPassword } from '../../lib/auth'

export const read = async (payload = {}) => {
  let {
    pagenum = 1,
    limit = 10,
    sort = 'id',
    dir = 'DESC'
  } = payload.query
  pagenum = Number(pagenum)
  const end = Number(limit)
  const start = (pagenum - 1) * end
  const data = await find({
    start: start,
    pagenum: pagenum,
    end: end,
    sort: sort,
    dir: dir
  })
  // you can use data count row if use client pagination just use 'data.count'
  // and you can use this function if pagination will be handle in backend.
  const paging = new Paging({
    count: data.count,
    pagenum: pagenum,
    end: end
  }).pagination
  return {
    msg: 'found',
    res: data.rows,
    page: paging
  }
}

export const detail = async (payload = {}) => {
  return { msg: 'found', res: await findOne({ id: payload.params.id }) !== null ? await findOne({ id: payload.params.id }) : {} }
}

export const insert = async (payload = {}) => {
  const res = await create(payload.body)
  console.log(res)
  return { msg: res === 1 ? 'success' : 'fail' }
}

export const update = async (payload = {}) => {
  const res = await edit({
    id: payload.params.id,
    body: {
      startLat: payload.body.start_lat,
      startLong: payload.body.start_long,
      endLat: payload.body.end_lat,
      endLong: payload.body.end_long,
      riderName: payload.body.rider_name,
      driverName: payload.body.driver_name,
      driverVehicle: payload.body.driver_vehicle
    }
  })
  return { msg: res === 1 ? 'success' : 'fail' }
}
export const remove = async (payload = {}) => {
  const res = await del({
    id: payload.params.id
  })
  return { msg: res === 1 ? 'success' : 'fail' }
}

export const login = async (payload) => {
  const msg = 'user atau password tidak ditemukan'
  const retData = await checkPassword({ username: payload.body.username, password: payload.body.password })
  // delete retData.res.user.password
  return { message: retData.code === 0 ? 'success' : msg, user: retData.code === 0 ? retData.res.user : null, token: retData.code === 0 ? retData.res.token : null }
}
