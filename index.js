'use strict';

var Apijs = require('apijs');

var app = new Apijs({
    cachePath: './cache/',
    port: 8001,
    global: {
        nologin: {
            errno: 10086,
            errmsg: '没登录'
        }
    }
});

app.run();