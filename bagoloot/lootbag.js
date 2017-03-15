'use strict'


const sqlite3 = require('sqlite3').verbose();
const {whichFunction} = require('./pars-args.js');

const db = new sqlite3.Database('./lootbag.sqlite3');

const createTable =() =>{
  db
  .run(`DROP TABLE IF EXISTS children`)
  .run(`CREATE TABLE IF NOT EXISTS children(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delievered INT)`)
}

let [,,...args] = process.argv;

whichFunction(args);

module.exports = { db, args, createTable }
