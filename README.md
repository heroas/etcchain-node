# etcchain-node
[![npm version](https://badge.fury.io/js/etcchain-node.svg)](https://badge.fury.io/js/etcchain-node)

Embarrassingly simple api wrapper for EtcChain api.

Using EtcChain api v1. Get official documentation from  [here](https://etcchain.com/api/).
## Install
```
npm install --save etcchain-node
```
## Importing
```js
var ETCCHAIN = require('etcchain-node');
var etcchainApi = new ETCCHAIN();
```

## Methods

### getBalance

Usage:

```js
etcchainApi.getBalance(address)
```

Get ETC Balance for a single Account

### getTransactionsByAddress

Usage:

```js
etcchainApi.getTransactionsByAddress(address, page, offset, sort)
```

Get a list of Account Transactions

### getIndex

Usage:

```js
etcchainApi.getIndex()
```
ETC Index
