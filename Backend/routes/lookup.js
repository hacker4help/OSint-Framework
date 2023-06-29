const express = require('express')
const router = express.Router()

const { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup, aboutUs, info } = require('../controllers/lookup')


router.route('/website').get(websiteLookup);
router.route('/phone').get(phoneNoLookup);
router.route('/username').get(usernameLookup);
router.route('/ip').get(ipLookup);
router.route('/email').get(emailLookup);
router.route('/about-us').get(aboutUs)
router.route('/info').get(info)

module.exports = router