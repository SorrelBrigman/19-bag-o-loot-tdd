'use strict'

const {assert: {isFunction} } = require('chai');
const { deliveredName } = require('../bagoloot/delivered.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('delivered', ()=>{
  describe('deliveredName',()=> {
    it('should be a function', ()=> {
      isFunction(deliveredName);
    });
    it('should change the value of delievered to true for that name the database', ()=>{

    })
  })
})
