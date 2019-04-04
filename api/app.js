'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const v1Router = require('./v1')
const app = express


function createApp(){
    app
        .use(bodyParser.json())
        .use('v1',v1Router)

        return app
    }
module.exports = createApp