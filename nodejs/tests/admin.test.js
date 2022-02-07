import app from 'src/app'
import supertest from 'supertest'
import { database } from 'src/database'

const request = supertest(app)

const db = database('mongodb://localhost/db-test')

const xAuth = 'gGnyWtx21ztdIsxGG8CFxSPy7ur80Gaye2mz8EUcyEmmnL6vvcF2HtmUzFTxkm9Q'

beforeAll(async () => {
  await db.connect()
})

afterAll(async () => {
  await db.clear()
  await db.close()
})

describe('GET /api/v1/admins', () => {
  test('respon get request', () => {
    return request.get('/api/v1/admins')
      .expect((response) => {
        expect(response.status).toBe(401)
      })
  })
})

describe('POST /api/v1/admins', () => {
  test('transaction_id field is required', () => {
    return request.post('/api/v1/admins/auth/signup')
      .set('x-auth', xAuth)
      .expect((response) => {
        expect(response.status).toBe(422)
      })
  })
  const payload = {
    name: 'ardian',
    password: '112233',
    email: 'ardian@test.com',
    username: 'ardian'
  }
  test('store success', () => {
    return request.post('/api/v1/admins/auth/signup')
      .set('x-auth', xAuth)
      .send(payload)
      .expect((response) => {
        expect(response.status).toBe(201)
      })
  })
})
