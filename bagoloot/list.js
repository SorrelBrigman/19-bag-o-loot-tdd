'use strict'

const {db} = require('./lootbag.js');

const listAll = ()=>{

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
