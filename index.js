const server = require('./api/server');

const PORT = process.env.Port || 3000

server.listen(PORT, () => {
    console.log('API running on port.')
})