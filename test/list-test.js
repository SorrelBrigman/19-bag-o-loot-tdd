'use strict'

const {assert: {isFunction} } = require('chai');
const { listAll, listToys } = require('../bagoloot/list.js')
const {db}  = require('../bagoloot/lootbag.js');

describe('list', ()=>{
  describe('listAll',()=> {
    it('should be a function', ()=> {
      isFunction(listAll);
    });
    it('should list all items in database database', ()=>{

    })
  });
  describe('listToys', ()=>{
    it('should be a function', () =>{
      isFunction(listToys);
    })
    it('should return a list of toys connected to that name', ()=>{

    })
  })
})