import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.42.109:8000');

function subscribeToTimer(cb) {
    socket.emit('subscribeToTimer', 1000);
    socket.on('timer', timestamp => {
        cb(timestamp);
        console.log(socket.id);
    })
}

function posts(posts){
    socket.on('allPosts', tweet => {
        posts(tweet)
    })
}

function post(post){
    socket.emit('posts', post);
}


export { subscribeToTimer, posts, post };