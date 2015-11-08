'use strict';

var Apijs = require('apijs');

var app = new Apijs({
    cachePath: './cache/',
    port: 8001
});

app.run();