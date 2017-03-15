'use strict'

const { db } = require('./lootbag.js')


const addName = (a, b)=> {
  return new Promise ((resolve, reject)=>{

    let name = a;
    let toy = b;

    db.run(`INSERT INTO children VALUES(null, "${name}", "${toy}", 0)`, (err, thing) =>{
      if(err) {
        console.log("addName err", err)
      }
      resolve(thing);
    })
  })
};

const queryLastId = () => {
  return new Promise ((resolve, reject)=>{
    db.get(`SELECT MAX(id) FROM children`, (err, children) =>{

      let data = children;
      if(err) {
        console.log("queryAll error", err)
      }
      resolve(data);
    })
  })
}

const queryName = (queryValue) => {
  return new Promise ((resolve, reject)=>{
    db.get(`SELECT name FROM children WHERE ${queryValue}`, (err, children) =>{
      let data = children;

      if(err) {
        console.log("queryName error", err)
      }
      console.log("trying to query Value")
      resolve(data);
    })
  })
}


module.exports = { addName, queryLastId, queryName }
