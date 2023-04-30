const express = require('express');
const AccountCtrl = require('../controllers/accountCtrl');

const router = express.Router();

/**
 * GET accounts
 */
router.get('/', AccountCtrl.getAccounts);

/**
 * GET account by id
 */
router.get('/:id', AccountCtrl.getAccount);

module.exports = router;
