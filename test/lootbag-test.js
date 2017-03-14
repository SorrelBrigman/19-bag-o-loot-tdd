'use strict'

const {assert: {isDefined} } = require('chai');

const {db}  = require('../bagoloot/lootbag.js')

// console.log(db);

describe('lootbag', ()=>{
  describe('db', () =>{
    it('should exist as a database', ()=>{
      isDefined(db, 'should be defined');
    });
  })
  // describe('addToList', () =>{
  //   it('should add to the database', ()=>{

  //   })
  // })
})
