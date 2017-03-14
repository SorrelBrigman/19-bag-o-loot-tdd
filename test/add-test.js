'use strict'

const {assert: {isFunction} } = require('chai');
const { addName } = require('../bagoloot/add.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('add', ()=>{
  describe('addName',()=> {
    console.log(addName);
    it('should be a function', ()=> {
      isFunction(addName);
    });
    it('should add to the database', ()=>{
    })
  })
})
