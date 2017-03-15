'use strict'

const {db} = require('./lootbag.js');

const removeName = (a, b)=>{
  return new Promise((resolve, reject)=>{
    let name = a;
    let toy = b;
    db.run(`DELETE FROM children WHERE name="${name}" and toy="${toy}"`, (err, thing)=>{
      resolve(thing)
    })
  })
}

module.exports = {removeName}
