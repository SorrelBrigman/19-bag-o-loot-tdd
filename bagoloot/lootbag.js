'use strict'


const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./lootbag.sqlite3');

// console.log(db)

module.exports = {db}
