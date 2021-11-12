var express = require('express'); 
const shopperstop_controlers= require('../contorllers/shopperstop'); 
var router = express.Router(); 
 
/* GET shopperstops */ 
router.get('/', shopperstop_controlers.shopperstop_view_all_Page ); 
module.exports = router; 