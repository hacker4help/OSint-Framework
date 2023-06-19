const express = require('express')
const router = express.Router()

const { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup } = require('../controllers/lookup')


router.route('/website').get(websiteLookup);
router.route('/phone').get(phoneNoLookup);
router.route('/username').get(usernameLookup);
router.route('/ip').get(ipLookup);
router.route('/email').get(emailLookup);

module.exports = router