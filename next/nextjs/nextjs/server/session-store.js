function getRedisSessionId(sid) {
    return `ssid:${sid}`
}
class RedisSessionStore {
    constructor(client) {
        this.client = client
        console.log(client, '----------------client')
    }
    // 获取 redis 中存储的 session
    async get(sid) {
        console.log('get session', sid)
        const id = getRedisSessionId(sid);
        const data = await this.client.get(id);
        if (!data) {
            return null;
        }
        try {
            const result = JSON.parse(data);
            return result;
        } catch (error) {
            console.error(error)
        }
    }
    // 设置 redis 中存储的 session
    // key, value, timer
    async set(sid, value, timer) {
        console.log('set session', sid)
        const id = getRedisSessionId(sid);
        if (typeof timers === 'number') {
            timer=Math.ceil(timer / 1000)
        }
        try {
            const sessStr = JSON.stringify(value)
            if(timer) {
                await this.client.setex(id, timer, sessStr)
            } else {
                await this.client.set(id, sessStr)
            }
        } catch (error) {
            console.error(error)
        }
    }
    // 从 redis 中删除某个 session
    async destroy(sid) {
        console.log('destroy session', sid)
        const id = getRedisSessionId(sid);
        await this.client.del(id)
    }
}