'use strict'

const {db} = require('./lootbag.js');

const removeName = (a)=>{
  return new Promise((resolve, reject)=>{
    let name = a;
    db.run(`DELETE FROM children WHERE name="${name}"`, (err, thing)=>{
      resolve(thing)
    })
  })
}

module.exports = {removeName}
