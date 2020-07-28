const Redis = require('ioredis');
const redis = new Redis({
    port: 6378, // Redis port
    host: "127.0.0.1", // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: "kings",
    db: 0,
});
async function redisAllKeys() {
    const keys = await redis.keys('*')
    console.log(keys);
}
async function redisGet(key) {
    const keys = await redis.get(key)
    console.log(keys);
}
async function redisSet(key, value) {
    const keys = await redis.set(key, value)
    console.log(keys);
}
async function redisSetex(key, time, value) {
    const keys = await redis.setex(key, time, value)
    console.log(keys);
}
redisSet('a', 1)
redisGet('a')
redisSetex('b', 10, 2)
redisAllKeys()