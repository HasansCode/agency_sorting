var express = require('express');
const axios = require('axios')
var router = express.Router();
const {home, getData, showDataOnWeb} = require('../controlar/controlar');
router.get('/',home);
router.post('/postquery',getData);
router.get('/rowdata',showDataOnWeb);

module.exports = router;