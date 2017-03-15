'use strict'

const {db} = require('./lootbag.js');

const listAll = ()=>{
  return new Promise((resolve, reject)=>{
    db.all(`SELECT name FROM children GROUP BY name`, (err, things)=>{
      let names = things;
      resolve(names);
    })
  })
}

const listToys = (value)=>{
  return new Promise((resolve, reject)=>{
    let name = value;
    db.all(`SELECT toy FROM children WHERE name="${name}"`,(err, data)=>{
      let toys = []
      data.forEach((each)=>{
        let thisToy = each.toy;
        toys.push(thisToy);
      })

      if(err){
        console.log("error form listToys", err)
      }
      resolve(toys);
    })
  })
}

module.exports = {listAll, listToys}
