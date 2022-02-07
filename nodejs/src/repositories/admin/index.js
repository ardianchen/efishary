import {
  auth
} from '../../models'

// validation check
export const checkEmail = async (username) => {
  const data = await auth.findOne({
    username: username
  })
  return data
}

// can use raw with sequlize.literal
export const find = async (payload = {}) => {
  return await auth.findAndCountAll({
    offset: payload.start,
    limit: payload.end,
    order: [[payload.sort, payload.dir]]
  })
}
export const create = async (payload = {}) => {
  try {
    await auth.create(payload)
    return 1
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const edit = async (payload = {}) => {
  return await auth.update(payload.body, {
    where: {
      id: payload.id
    }
  })[0]
}
export const del = async (payload = {}) => {
  return await auth.destroy({
    where: {
      id: payload.id
    }
  })
}
export const findOne = async (payload = {}) => {
  return await auth.findOne({
    where: {
      id: payload.id
    }
  })
}
