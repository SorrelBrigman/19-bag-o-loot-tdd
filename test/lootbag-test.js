'use strict'

const {assert: {isDefined, isArray} } = require('chai');

const {db, args}  = require('../bagoloot/lootbag.js')

// console.log(db);

describe('lootbag', ()=>{
  describe('db', () =>{
    it('should exist', ()=>{
      isDefined(db, 'should be defined');
    });
  });
  describe('args', ()=>{
    it('should return an array', ()=>{
      isArray(args);
    })
  })
})
