var ETCCHAIN = require('./etcchain.js');

var tester = new ETCCHAIN();
var testAddress = '0x1Ae4c1aC38BE9110bDb4cc19eC15Bbf7172F8157'
console.log(tester.getBalance(testAddress))
console.log(tester.getTransactionsByAddress(testAddress,1,0,'asc'))
