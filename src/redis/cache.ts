import { createClient } from 'redis'

const redisClient = createClient()
redisClient.connect()

redisClient.on('connect', () => {
  console.log(`Redis connection established`)
})
redisClient.on('error', error => {
  console.log(`Redis error, service degraded: ${error.message}`)
})

const TTL = 20

const get = async function <T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const cached = await redisClient.get(key)
  if (cached) return JSON.parse(cached)

  const result = await fetcher()
  const stringified = JSON.stringify(result)
  await redisClient.setEx(key, TTL, stringified)

  return result
}

const del = function (key: string) {
  return redisClient.del(key)
}

const flush = function () {
  return redisClient.flushAll()
}

export default { get, del, flush }
