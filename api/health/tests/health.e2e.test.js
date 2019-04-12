'use strict'

const { api, dbSetup, tearDown } = require('../../../tests/utils')
const delay = require('util').promisify(setTimeout)

describe('Health', () => {
  describe('Good Health', () => {
    before(async () => {
      await dbSetup()
    })
    it.only('should  return ok for health route', async () => {
      await delay(1000)

      return api()
        .get('v1/health')
        .expect(200)
    })
  })

  describe('Bad health', () => {
    describe('Database not connected', () => {
      before(async () => {
        await tearDown()
      })

      it('should return 503 for health route if db is not connected', async () => {
        await delay(1000)

        await api()
          .get('/v1/health')
          .expect(503)
      })
    })
  })
})
