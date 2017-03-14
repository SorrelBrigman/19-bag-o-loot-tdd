'use strict'

const {assert: {isFunction} } = require('chai');
const { removeName } = require('../bagoloot/remove.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('remove', ()=>{
  describe('removeName',()=> {
    it('should be a function', ()=> {
      isFunction(removeName);
    });
    it('should remove from the database', ()=>{

    })
  })
})
