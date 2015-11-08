'use strict';

var Apijs = require('apijs');

var app = new Apijs({
    cachePath: './cache/'
});

app.run();