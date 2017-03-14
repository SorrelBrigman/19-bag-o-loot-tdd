'use strict'


const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./lootbag.sqlite3');

db.run(`CREATE TABLE IF NOT EXISTS children(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delievered INT)`)

let [,,...args] = process.argv;

module.exports = { db, args }
