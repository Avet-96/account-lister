const Account = require('../models/account');
const mongoose = require( "mongoose" );


/**
 * Get accounts.
 *
 * @param req
 * @param res
 */
const getAccounts = (req, res) => {
  Account.find({})
    .then((accounts) => {
      res.status(200).send(accounts);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send()
    });
};

/**
 * Get account by provided id.
 *
 * @param req
 * @param res
 */
const getAccount = (req, res) => {
  const { id: accountId } = req.params;

  Account.findById(accountId)
    .then((account) => {
      if(!account){
        res.sendStatus(404);
        return;
      }

      res.status(200).send(account);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send()
    });
};

module.exports = {
  getAccounts,
  getAccount,
};
