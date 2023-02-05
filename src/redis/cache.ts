import { createClient } from 'redis'

const redisClient = createClient()
redisClient.connect()

redisClient.on('connect', () => {
  console.log(`Redis connection established`)
})
redisClient.on('error', error => {
  console.log(`Redis error, service degraded: ${error.message}`)
})

const set = async function (key: string, value: object) {
  return redisClient.set(key, JSON.stringify(value))
}

const get = async function (key: string): Promise<object | null> {
  const cached = await redisClient.get(key)
  if (!cached) return null

  return JSON.parse(cached)
}

const del = function (key: string) {
  return redisClient.del(key)
}

const flush = function () {
  return redisClient.flushAll()
}

const invalidateByPattern = async function (pattern: string) {
  const keys = await redisClient.keys(pattern)
  for (const key of keys) {
    del(key)
  }
}

export default { set, get, del, flush, invalidateByPattern }
