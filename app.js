const app = require('express')();
const http = require("http").Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
    socket.on('disconnet', () => {
        window.alert('user left!!!!!!!!!!!!');
    })
})

http.listen(PORT, () => {
    console.log(`server is started at posrt ${PORT}`);
})
