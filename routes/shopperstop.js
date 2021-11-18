var express = require('express'); 
const shopperstop_controlers= require('../contorllers/shopperstop'); 
var router = express.Router(); 
 
/* GET shopperstops */ 
router.get('/', shopperstop_controlers.shopperstop_view_all_Page );
router.get('/create', shopperstop_controlers.shopperstop_create_Page); 
router.get('/detail', shopperstop_controlers.shopperstop_view_one_Page);  
module.exports = router; 