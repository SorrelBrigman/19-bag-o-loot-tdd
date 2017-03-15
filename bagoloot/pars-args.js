'use strict'

// const {args} = require('./lootbag.js');
const {addName} = require('./add.js');
const {removeName} = require('./remove.js');
const {listToys, listAll} = require('./list.js');
const {deliveredName} = require('./delivered.js');

// let args = ["add", "cookies", "Sally"]


const whichFunction = (fromCLI)=>{
  if(fromCLI[0] === "add") {
    let toy = fromCLI[1];
    let name = fromCLI[2]
      addName(name, toy).then();
  } else if(fromCLI[0]=== "remove") {
    let name = fromCLI[1];
    let toy = fromCLI[2]
      removeName(name).then();
  } else if(fromCLI[0]=== "ls" && fromCLI.length === 2) {
    let name = fromCLI[1];
    listToys(name)
    .then((results)=>{
       console.log(results);
    })
  } else if (fromCLI[0]==="ls") {
    listAll()
    .then((results)=>{
      console.log(results)
    })
  } else if (fromCLI[0]==="delivered") {
    let name = fromCLI[1];
    deliveredName(name).then();

  }
}


module.exports = { whichFunction }
