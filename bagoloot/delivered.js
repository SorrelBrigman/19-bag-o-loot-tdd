'use strict'

const {db} = require('./lootbag.js');

const deliveredName = (name) => {
  return new Promise ((resolve, reject)=>{
    let thisName = name;
    db.run(`UPDATE children SET delievered = 1 WHERE name="${thisName}"`, (err, data)=>{
      if(err) {
        console.log("error from deliveredName", err);
      }
      resolve(data)
    })
  })
}

module.exports = { deliveredName }
