'use strict'

const {assert: {isFunction, equal} } = require('chai');
const { deliveredName } = require('../bagoloot/delivered.js')
const {queryDelivery} = require('../bagoloot/add.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('delivered', ()=>{
  describe('deliveredName',()=> {
    it('should be a function', ()=> {
      isFunction(deliveredName);
    });
    it('should change the value of delievered to true for that name the database', ()=>{
      let name = "Sally"
      return deliveredName(name)
      .then(()=>{
        return queryDelivery(`name="${name}"`)
      })
      .then((value)=>{
        let result = value;
        let expected = true;
        equal(expected, result);
      })
    })
  })
})
