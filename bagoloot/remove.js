'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./lootbag.sqlite3');

// const {db} = require('./lootbag.js');

const removeName = (a, b)=>{
  return new Promise((resolve, reject)=>{
    let name = a;
    let toy = b;
    db.run(`DELETE FROM children WHERE name="${name}"`, (err, thing)=>{
      resolve(thing)
    })
  })
}

module.exports = {removeName}
