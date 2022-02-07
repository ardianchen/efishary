export default (message, res, page) => {
  const response = {}

  if (message) {
    response.message = message
  }

  if (res) {
    response.result = res
  }

  if (page) {
    response.page = page
  }

  return response
}
