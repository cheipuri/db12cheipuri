var express = require('express'); 
const shopperstop_controlers= require('../contorllers/shopperstop'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET shopperstops */ 
router.get('/', shopperstop_controlers.shopperstop_view_all_Page );
router.get('/create', secured, shopperstop_controlers.shopperstop_create_Page); 
router.get('/detail', shopperstop_controlers.shopperstop_view_one_Page);  
/* GET create update page */ 
router.get('/update', secured, shopperstop_controlers.shopperstop_update_Page);
router.get('/delete', secured, shopperstop_controlers.shopperstop_delete_Page); 
 
module.exports = router; 