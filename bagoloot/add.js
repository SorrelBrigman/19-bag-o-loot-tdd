'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./lootbag.sqlite3');

// const { db } = require('./lootbag');


const addName = (a, b)=> {
  return new Promise ((resolve, reject)=>{

    let name = a;
    let toy = b;

    db.run(`INSERT INTO children VALUES(null, "${name}", "${toy}", 0)`, (err, thing) =>{
      if(err) {
        console.log("addName err", err)
        return reject
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
    db.all(`SELECT name FROM children WHERE ${queryValue} GROUP BY name`, (err, children) =>{
      let data = children[0].name;
      console.log("return from name query", data)
      if(err) {
        console.log("queryName error", err)
      }
      // console.log("trying to query Value")
      resolve(data);
    })
  })
}

const queryDelivery = (queryValue) => {
  return new Promise ((resolve, reject)=>{
    db.all(`SELECT delievered FROM children WHERE ${queryValue} GROUP BY delievered`, (err, status) =>{
      let data = status[0].delievered;
      console.log("return from query deliver", data)
      if(err) {
        console.log("queryDelivery error", err)
      }
      console.log("trying to query delivery")

      resolve(data);
    })
  })
}


module.exports = { addName, queryLastId, queryName, queryDelivery }
