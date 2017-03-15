'use strict'

const {assert: {isFunction, notDeepEqual, equal} } = require('chai');
const { addName, queryLastId, queryName } = require('../bagoloot/add.js')
// const {db}  = require('../bagoloot/lootbag.js');

describe('add', ()=>{
  describe('addName',()=> {
    console.log(addName);
    it('should be a function', ()=> {
      isFunction(addName);
    });
    it('should add passed data to the database', ()=>{
      // let myAdd = `"Sally", "sockmonkey"`;
      // console.log("myAdd", myAdd)
      return addName("Sally", "sockmonkey")
      .then(()=>{
        let myQuery = `name="Sally" and toy="sockmonkey"`;

        return queryName(myQuery)
      })
      .then((response)=>{
        console.log(response)
        equal(response.name, "Sally");
        })
    });
    it('should change the number of entries in the database', ()=>{
      let beforeAdd = 0;
      let afterAdd = 0;
      return queryLastId()
      .then((answer)=>{
        beforeAdd = answer;

        return addName("Bobby", "guitar")
      })
      .then(()=>{
        return queryLastId()
      })
      .then((answer)=>{
        afterAdd = answer

        notDeepEqual(beforeAdd, afterAdd)
      })


    })
  })
})
