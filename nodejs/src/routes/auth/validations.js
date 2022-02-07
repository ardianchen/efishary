import Validator from 'validatorjs'

export const post = ({ body }) => {
  const rules = {
    name: 'required',
    username: 'required',
    phone: 'required',
    role: 'required'
  }
  return new Validator(body, rules)
}
