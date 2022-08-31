const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());
 let accounts;
 let inbox;
 const {interface , bytecode}= require('../compile');

beforeEach(async ()=>
{
  accounts = await web3.eth.getAccounts()
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data : bytecode, arguments : ['Hi there']})
  .send({from : accounts[0], gas:'1000000'})
});

describe('inbox' , ()=>
{
   it('deploys a contract', ()=> {

    console.log(inbox);
   });
});
describe('Car',()=>
{
   it('can park' , ()=>
   {
     const car=new Car();
     assert.equal(car.park(),'stopped');
   } );
} );