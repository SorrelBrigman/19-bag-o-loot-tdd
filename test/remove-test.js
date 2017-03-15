'use strict'

const {assert: {isFunction, equal, notDeepEqual} } = require('chai');
const { removeName } = require('../bagoloot/remove.js')
const { queryName, queryLastId} = require('../bagoloot/add.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('remove', ()=>{
  describe('removeName',()=> {
    it('should be a function', ()=> {
      isFunction(removeName);
    });
    // it('should remove from the database', ()=>{
    //   return removeName("Bobby", "guitar")
    //   .then(()=>{
    //     let myQuery = `name="Bobby" and toy="guitar"`;
    //     return queryName(myQuery);
    //   })
    //   .then((answer)=>{

    //     equal(answer, undefined)
    //   })
    // })
    it('should reduce the number of entries in the database', ()=>{
      let beforeRemove = 0;
      let afterRemove = 0;
      return queryLastId()
      .then((answer)=>{
        beforeRemove = answer;
        return removeName("Bobby")
      })
      .then(()=>{
        return queryLastId()
      })
      .then((answer)=>{
        afterRemove = answer

        notDeepEqual(beforeRemove, afterRemove)
      })

    })
  })
})
