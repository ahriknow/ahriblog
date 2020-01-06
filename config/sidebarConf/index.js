module.exports = {
    '/mongo/': require('./mongo/index'),
    '/Linux运维/': require('./Linux运维/index'),
    '/redis/': require('./redis/index'),
    '/docker/': require('./docker/index'),
    '/lvs/': require('./lvs/index'),
    // fallback
    '/': ['', 'about/']
}
