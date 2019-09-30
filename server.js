"use strict";

const express = require('express');
const morgan = require("morgan");
const router = require("./router");
const app = express();
app.use(morgan("common"));
app.use(express.json());
app.use(express.static('public'));

app.use('/dogposts', router);

if (require.main === module) {
    app.listen(process.env.PORT || 8080, function() {
    });
}
