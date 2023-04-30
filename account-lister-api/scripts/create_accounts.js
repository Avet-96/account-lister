const Account = require('../models/account')
const mongoose = require('mongoose');
const Configs = require('../config.js');
const accountsList = [
  {
    id: '1',
    name: 'Account 1',
    createdOn: '5-10-23',
    updatedOn: '5-10-23',
    owner: 'User 1',
  },
  {
    id: '2',
    name:'Account 2',
    createdOn: '4-10-23',
    updatedOn: '5-10-23',
    owner: 'User 2',
  },
  {
    id: '3',
    name:'Account 3',
    createdOn: '6-10-23',
    updatedOn: '7-10-23',
    owner: 'User 3',
  },
  {
    id: '4',
    name:'Account 4',
    createdOn: '7-10-23',
    updatedOn: '7-10-23',
    owner: 'User 4',
  }
]

mongoose
  .connect(Configs.MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(async () => {
    console.log('successfully connected to mongodb');
    const promises = accountsList.map(( account ) => {
      const newAccount =  new Account(account);
      return newAccount.save();
    });

    await Promise.all(promises)
  })
  .catch((err) => {
    console.error(err);
  });
